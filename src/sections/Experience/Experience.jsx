import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export default function Experience() {
  const meshRef = useRef();
  const meshRef1 = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();
  const { camera } = useThree();

  const objectsDistance = 5;

  useEffect(() => {
    const handleScroll = () => {
      console.log("user is scrolling");
      console.log(window.scrollY);
      //console.log(camera);

      // camera.position.y = window.scrollY;

      if (meshRef.current) {
        // Increase the divisor to further slow down the movement
        //const scrollFactor = 100; // Adjust this value as needed
        // Set the cube's Y position based on the scroll position
        // meshRef.current.position.y = window.scrollY / scrollFactor;
        //meshRef.current.position.y = -4;
        //window.innerHeight / 4;
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state, delta) => {
    //
    camera.position.y = (-window.scrollY / window.innerHeight) * 5 + 2;

    //
    if (meshRef.current) {
      // Rotate the box on the y-axis
      meshRef.current.rotation.y += delta * 0.5;
      meshRef1.current.rotation.x += delta * 0.5;
      meshRef2.current.rotation.y += delta * 0.5;
      meshRef3.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group>
      <axesHelper />
      <mesh ref={meshRef}>
        <ambientLight />
        <directionalLight />
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh ref={meshRef1} position-y={[-objectsDistance * 1]}>
        <ambientLight />
        <directionalLight />
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={meshRef2} position-y={[-objectsDistance * 2]}>
        <ambientLight />
        <directionalLight />
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh>

      <mesh ref={meshRef3} position-y={[-objectsDistance * 3]}>
        <ambientLight />
        <directionalLight />
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* <mesh position={[-5, -1, 1]} rotation={[0, 2, 0]}>
        <ambientLight />
        <directionalLight />
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh> */}
    </group>
  );
}
