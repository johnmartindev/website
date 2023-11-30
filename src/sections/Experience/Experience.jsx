import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function Experience() {
  const meshRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (meshRef.current) {
        // Increase the divisor to further slow down the movement
        const scrollFactor = 100; // Adjust this value as needed

        // Set the cube's Y position based on the scroll position
        meshRef.current.position.y = window.scrollY / scrollFactor;
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
    if (meshRef.current) {
      // Rotate the box on the y-axis
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <ambientLight />
        <directionalLight />
        <boxGeometry args={[1, 1, 1]} rotation={[0, Math.PI / 4, 0]} />
        <meshStandardMaterial color="red" />
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
