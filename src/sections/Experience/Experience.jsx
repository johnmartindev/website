// Imports:
import * as THREE from "three";
import { Perf } from "r3f-perf";
import { useRef, useEffect, Suspense } from "react";
import { extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Environment, Float, Html, useGLTF } from "@react-three/drei";
import { ShaderIntroPlaneMaterial } from "./shaders/introPlane/shaderIntroPlaneMaterial";
//import { useControls } from "leva";
import { useSkillsStore } from "../../store/store";
import { skillsAssets } from "./skillsAssets/skillsAssets";

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

  const matcapTextureFile = `/matcaps/diamond/matcap-diamond.jpg`;

  const texture = {
    matcap: matcapTextureFile,
    skin: "/matcaps/diamond/skin.png",
    env: "/matcaps/diamond/env.png",
  };

  const materialIntroMonogram2 = new THREE.MeshMatcapMaterial({
    color: 0xcccccc,
    side: THREE.DoubleSide,
    matcap: new THREE.TextureLoader().load(texture.matcap),
    map: new THREE.TextureLoader().load(texture.env),
  });

  // const materialIntroMonogram = new THREE.MeshPhysicalMaterial({
  //   color: 0x222222,
  //   metalness: 0.8,
  //   roughness: 0.2,
  // });

  // 2. Skills refs:
  const skillsRef = useRef();
  const skillCubeHoveredRef = useRef(null);
  const materialSkillCube = new THREE.MeshPhysicalMaterial({
    color: 0x999999,
    metalness: 0.9,
    roughness: 0.2,
  });
  const materials = [
    materialSkillCube,
    materialSkillCube,
    materialSkillCube,
    materialSkillCube,
    // Texture will be added on index 4 later:
    materialSkillCube,
    materialSkillCube,
  ];
  const skillWhiteGradient = document.getElementById(
    "skill-white-radial-gradient-container"
  );

  const handleSkillCubePointerOver = (event, cubeID) => {
    event.stopPropagation();
    skillCubeHoveredRef.current = cubeID;
    skillWhiteGradient.style.opacity = 1;
  };

  const handleSkillCubePointerOut = (event) => {
    event.stopPropagation();
    containerMain.style.cursor = "default";
    skillCubeHoveredRef.current = null;
    skillWhiteGradient.style.opacity = 0;
  };

  const skillIndex = useSkillsStore((state) => state.skillIndex);
  const setSkillIndex = useSkillsStore((state) => state.setSkillIndex);

  const handleSkillCubeClick = (event, cubeID) => {
    event.stopPropagation();
    const selectedCube = scene.getObjectByName(cubeID);
    console.log("Selected cube:", selectedCube);
    console.log(skillIndex);
    document.getElementById("skill-overlay").style.display = "block";
    setSkillIndex(cubeID.split("-")[1]);
  };

  // 3. Projects refs:
  const meshProjectsRef = useRef();

  // 4. Contact refs:
  const meshContactRef = useRef();

  // Camera ref:
  const { camera, scene } = useThree();

  // Temporary fix for loading issue with shader....
  // window.scrollTo(0, 0);

  /* Materials:
   ******************************************/
  extend({ ShaderIntroPlaneMaterial }); // Feels slower... no loader? Bring code back here:

  /* Models:
   ******************************************/
  const computerMonogram = useGLTF("./models/macbook_model.gltf");
  const modelMonogram = useGLTF("./models/monogram-logo.gltf");

  modelMonogram.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = materialIntroMonogram2;
    }
  });

  /* References:
   ******************************************/
  useEffect(() => {
    if (meshIntroPlaneRef.current) {
      meshIntroPlaneRef.current.lookAt(camera.position);
    }
    containerMain.addEventListener("mousemove", (event) => {
      skillWhiteGradient.style.top = event.clientY + "px";
      skillWhiteGradient.style.left = event.clientX + "px";
    });
    if (meshIntroPlaneRef.current) {
      meshIntroPlaneRef.current.material.transparent = true;
    }
    const cameraCp = camera;
    //cameraPositionCp.y = 1;
    console.log(cameraCp.position);

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
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    window.addEventListener("mousemove", (event) => {
      skillWhiteGradient.style.display = "block";
      skillWhiteGradient.style.top = event.clientY + window.scrollY - 50 + "px";
      skillWhiteGradient.style.left =
        event.clientX + window.scrollX - 50 + "px";
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* UseFrame:
   ******************************************/
  useFrame((state, delta) => {
    // 1. Update uTime shader uniform with delta:
    if (shaderIntroPlaneRef.current) {
      shaderIntroPlaneRef.current.uTime += delta * 0.5 * 0.5;
    }
    if (meshIntroPlaneRef.current) {
      meshIntroPlaneRef.current.lookAt(camera.position);
    }
    // 2. Update intro monogram to rotate:
    if (primitiveIntroMonogramRef.current) {
      primitiveIntroMonogramRef.current.rotation.y += delta;
    }

    // 3. Update contact cube to rotate:
    if (meshContactRef.current) {
      meshContactRef.current.rotation.x += delta * 0.5;
    }

    // Check if a skill cube is hovered over. If so, grow it:
    for (let i = 0; i < skillsAssets.gridSize * skillsAssets.gridSize; i++) {
      const cubeID = `cube-${i}`;
      const mesh = scene.getObjectByName(cubeID);
      if (mesh) {
        if (skillCubeHoveredRef.current === cubeID) {
          mesh.scale.set(0.7, 0.7, 0.7); // Grow when hovered
          containerMain.style.cursor = "pointer";
        } else {
          mesh.scale.set(0.5, 0.5, 0.5); // Shrink back to normal when not hovered
        }
      }
    }
  });

  // Create 3D "skills" cubes:
  const textures = useLoader(THREE.TextureLoader, skillsAssets.imagePaths);
  let cubes = [];
  for (let i = 0; i < skillsAssets.gridSize; i++) {
    for (let j = 0; j < skillsAssets.gridSize; j++) {
      const cubeMaterials = [...materials];
      const cubeID = `cube-${i * skillsAssets.gridSize + j}`;
      cubeMaterials[4] = new THREE.MeshPhysicalMaterial({
        map: textures[i * skillsAssets.gridSize + j],
        metalness: skillsAssets.materialProperties.metalness,
        roughness: skillsAssets.materialProperties.roughness,
      });
      cubes.push(
        <mesh
          key={cubeID}
          material={cubeMaterials}
          name={cubeID}
          onClick={(e) => handleSkillCubeClick(e, cubeID)}
          onPointerOut={handleSkillCubePointerOut}
          onPointerOver={(e) => handleSkillCubePointerOver(e, cubeID)}
          position={skillsAssets.positions[i * skillsAssets.gridSize + j]}
          scale={[0.5, 0.5, 0.2]}
        >
          <boxGeometry />
        </mesh>
      );
    }
  }
  const LoadingIndicator = () => {
    return (
      <Html center>
        <div
          style={{
            background: "black",
            color: "red",
            position: "absolute",
            top: "50%",
            fontSize: "50px",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img width="50px" src="/spinners/spinner.gif" />
          {/* Loading... */}
        </div>
      </Html>
    );
  };
  return (
    <>
      <Suspense fallback={<LoadingIndicator />}>
        <Environment preset="city" />
        <Perf position="bottom-left" />
        <group>
          <ambientLight intensity={4} />
          {/* 1. Intro:
           ******************************************/}
          <primitive
            material={materialIntroMonogram2}
            ref={primitiveIntroMonogramRef}
            object={modelMonogram.scene}
            scale={[0.4, 0.4, 0.4]}
            //position={[2.5, -0.75, 5]}
            position={[0.5, -0.75, 1]}
            rotation={[0, 0.9, 0]}
          />
          <mesh ref={meshIntroPlaneRef} scale={[2.5, 1.1, 1.5]}>
            <planeGeometry args={[3.5, 3.5]} />
            <shaderIntroPlaneMaterial ref={shaderIntroPlaneRef} opacity={0.2} />
          </mesh>

          {/* 2. Skills:
           ******************************************/}
          <group
            scale={0.7}
            rotation={[0, 0.6, 0]}
            ref={skillsRef}
            position-y={[-objectsDistance * 1 - 0.1]}
          >
            <Float speed={2.5}>{cubes}</Float>
          </group>

          {/* 3. Projects:
           ******************************************/}

          <mesh ref={meshProjectsRef} position-y={[-objectsDistance * 2]}>
            <primitive
              object={computerMonogram.scene}
              scale={[0.5, 0.5, 0.5]}
              position={[1.5, -1, 3]}
              rotation={[0, 0.5, 0]}
            />
          </mesh>

          {/* 4. Contact:
           ******************************************/}
          <mesh ref={meshContactRef} position-y={[-objectsDistance * 3]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="MediumSeaGreen" />
          </mesh>
        </group>
      </Suspense>
    </>
  );
}
