import { Perf } from "r3f-perf";
//import { useControls } from "leva";
import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export default function Experience() {
  let container = document.getElementById("wrapper-container");
  //const controls = useControls({ position: -2 });

  window.scrollTo(0, 0);

  const meshRef = useRef();
  const meshRef1 = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();
  const { camera } = useThree();

  const objectsDistance = 5;

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;

      camera.position.y = (containerTop / containerHeight) * objectsDistance;

      // if (meshRef.current) {
      // }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5 * 0.5;
      meshRef1.current.rotation.x += delta * 0.5;
      meshRef2.current.rotation.z += delta * 0.5 * 0.5;
      meshRef3.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      <Perf position="bottom-left" />
      <group>
        {/* <Sparkles size={1} scale={10} position={[-1, -1, 1]} /> */}
        {/* <axesHelper /> */}
        {/* <Sparkles size={10} /> */}
        {/* <primitive
          wireframe={true}
          ref={meshRef}
          object={gltf.scene}
          position={[0, -0.5, 0]}
          scale={[0.5, 0.5, 0.5]}
          // children-0-castShadow
          // material={o_mat}
        /> */}

        <directionalLight />
        <ambientLight />
        <mesh ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="Tomato" />
        </mesh>

        <mesh ref={meshRef1} position-y={[-objectsDistance * 1]}>
          <boxGeometry args={[1, 1, 1]} wireframe={true} />
          <meshStandardMaterial color="LightGray" />
        </mesh>

        <mesh ref={meshRef2} position-y={[-objectsDistance * 2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="DodgerBlue" />
        </mesh>

        <mesh ref={meshRef3} position-y={[-objectsDistance * 3]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="MediumSeaGreen" />
        </mesh>
      </group>
    </>
  );
}
