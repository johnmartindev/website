import { useRef, useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

export default function Experience() {
  const meshRef = useRef();
  const meshRef1 = useRef();
  const meshRef1bg = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();
  const { camera } = useThree();

  const objectsDistance = 7;

  useEffect(() => {
    const handleScroll = () => {
      // console.log("user is scrolling");
      // console.log(window.scrollY);
      // console.log(camera);
      // camera.position.y = window.scrollY;

      if (meshRef.current) {
        meshRef1bg.current.scale.x = 10;
        meshRef1bg.current.scale.y = 1.1;
        meshRef1bg.current.position.z = -3;
        meshRef1bg.current.position.x = -4;
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
    camera.position.y =
      (-window.scrollY / window.innerHeight) * objectsDistance;

    //
    if (meshRef.current) {
      // Rotate the box on the y-axis
      meshRef.current.rotation.y += delta * 0.5;
      meshRef1.current.rotation.x += delta * 0.5;
      meshRef2.current.rotation.y += delta * 0.5;
      meshRef3.current.rotation.z += delta * 0.5;
    }
  });

  const matcapTextureFile = `./matcaps/diamond/matcap-diamond.jpg`;
  const skinTextureFile = `./matcaps/diamond/skin.png`;
  const envTextureFile = `./matcaps/diamond/env.png`;

  const texture = {
    matcap: matcapTextureFile,
    skin: skinTextureFile,
    env: envTextureFile,
  };

  const gltf = useLoader(GLTFLoader, "./models/monogram-logo.gltf");
  const o_mat = new THREE.MeshMatcapMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    matcap: new THREE.TextureLoader().load(texture.matcap),
    map: new THREE.TextureLoader().load(texture.env),
  });

  console.log(o_mat);
  return (
    <>
      <group>
        <ambientLight />
        <directionalLight />
        <axesHelper />
        <Sparkles size={5} scale={20} />
        <primitive
          ref={meshRef}
          object={gltf.scene}
          position={[0, -0.5, 0]}
          scale={[0.5, 0.5, 0.5]}
          // children-0-castShadow
          material={o_mat}
        />

        {/* <mesh ref={meshRef}>
          <ambientLight />
          <directionalLight />

         <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh> */}

        <mesh ref={meshRef1} position-y={[-objectsDistance * 1]}>
          <ambientLight />
          <directionalLight />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh
          ref={meshRef1bg}
          position-y={[-objectsDistance * 1]}
          rotation-y={0.5}
        >
          <ambientLight />
          <directionalLight />
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="white" />
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
    </>
  );
}
