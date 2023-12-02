// Imports:
import { Perf } from "r3f-perf";
import { useRef, useEffect } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { ShaderIntroPlaneMaterial } from "./shaders/introPlane/shaderIntroPlaneMaterial";
import { useGLTF } from "@react-three/drei";
//import { useControls } from "leva";

export default function Experience() {
  const objectsDistance = 5;
  let containerMain = document.getElementById("wrapper-container");
  let containerIntro = document.getElementById("intro");
  //const controls = useControls({ position: -2 });

  /* References:
   ******************************************/
  // 1. Intro refs:
  const meshIntroPlaneRef = useRef();
  const shaderIntroPlaneRef = useRef();
  const primitiveIntroMonogramRef = useRef();

  // 2. Skills refs:
  const skillsRef = useRef();

  // 3. Projects refs:
  const meshProjectsRef = useRef();

  // 4. Contact refs:
  const meshContactRef = useRef();

  // Camera ref:
  const { camera } = useThree();

  // Temporary fix for loading issue with shader....
  window.scrollTo(0, 0);

  /* Materials:
   ******************************************/
  extend({ ShaderIntroPlaneMaterial }); // Feels slower... no loader? Bring code back here:

  /* Models:
   ******************************************/
  const computerMonogram = useGLTF("./models/macbook_model.gltf");
  const modelMonogram = useGLTF("./models/monogram-logo.gltf");

  /* References:
   ******************************************/
  useEffect(() => {
    if (meshIntroPlaneRef.current) {
      meshIntroPlaneRef.current.material.transparent = true;
    }
    const cameraCp = camera;
    //cameraPositionCp.y = 1;
    console.log(cameraCp.position);
    meshIntroPlaneRef.current.lookAt(camera.position);

    // Handle scroll:
    const handleScroll = () => {
      const containerHeight = containerMain.offsetHeight;
      const containerTop = containerMain.getBoundingClientRect().top;
      const containerIntroRect = containerIntro.getBoundingClientRect();
      const containerIntroHeight = containerIntroRect.height;
      const containerIntroOpacity = 1 - -containerTop / containerIntroHeight;

      // Make camera follow objects of each section:
      camera.position.y = (containerTop / containerHeight) * objectsDistance;

      // Make opacity of intro plane fade to zero on scroll down:
      shaderIntroPlaneRef.current.uOpacity = containerIntroOpacity.toFixed(2);

      // Adjust the plane's opacity based on the scroll
      if (meshIntroPlaneRef.current) {
        meshIntroPlaneRef.current.material.opacity = 0.2;
      }

      // if (primitiveIntroMonogramRef.current) {
      // }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* UseFrame:
   ******************************************/
  useFrame((state, delta) => {
    shaderIntroPlaneRef.current.uTime += delta * 0.5;
    if (meshProjectsRef.current) {
      primitiveIntroMonogramRef.current.rotation.y += delta;
      meshProjectsRef.current.rotation.y += delta * 0.5 * 0.5;
      meshContactRef.current.rotation.x += delta * 0.5;
    }
  });

  return (
    <>
      <Perf position="bottom-left" />
      <group>
        <directionalLight />
        <ambientLight />

        {/* 1. Intro:
         ******************************************/}
        <primitive
          ref={primitiveIntroMonogramRef}
          object={modelMonogram.scene}
          scale={[0.4, 0.4, 0.4]}
          //position={[2.5, -0.75, 5]}
          position={[0.5, -0.75, 1]}
          rotation={[0, 0.9, 0]}
        />
        <mesh ref={meshIntroPlaneRef} scale={[2.5, 1.1, 1.5]}>
          <planeGeometry args={[4, 4]} />
          <shaderIntroPlaneMaterial ref={shaderIntroPlaneRef} opacity={0.2} />
        </mesh>

        {/* 2. Skills:
         ******************************************/}
        <group ref={skillsRef} position-y={[-objectsDistance * 1]}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} position={[1, 1, 1]} />
            <meshStandardMaterial color="MediumSeaGreen" />
          </mesh>
        </group>

        {/* 3. Projects:
         ******************************************/}
        <mesh ref={meshProjectsRef} position-y={[-objectsDistance * 2]}>
          <primitive
            object={computerMonogram.scene}
            scale={[0.5, 0.5, 0.5]}
            position={[0.2, -1, 1]}
          />
        </mesh>

        {/* 4. Contact:
         ******************************************/}
        <mesh ref={meshContactRef} position-y={[-objectsDistance * 3]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="MediumSeaGreen" />
        </mesh>
      </group>
    </>
  );
}
