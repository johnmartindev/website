import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";

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
      if (meshRef.current) {
        meshRef1bg.current.position.z = -3;
        meshRef1bg.current.position.x = -4;
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
      meshRef.current.rotation.y += delta * 0.5 * 0.5;
      meshRef1.current.rotation.x += delta * 0.5;
      meshRef2.current.rotation.y += delta * 0.5;
      meshRef3.current.rotation.z += delta * 0.5;
    }
  });

  // const matcapTextureFile = `./matcaps/diamond/matcap-diamond.jpg`;
  // const skinTextureFile = `./matcaps/diamond/skin.png`;
  // const envTextureFile = `./matcaps/diamond/env.png`;

  // const texture = {
  //   matcap: matcapTextureFile,
  //   skin: skinTextureFile,
  //   env: envTextureFile,
  // };

  // const gltf = useLoader(GLTFLoader, "./models/monogram-logo.gltf");
  // const o_mat = new THREE.MeshMatcapMaterial({
  //   color: 0xffffff,
  //   side: THREE.DoubleSide,
  //   matcap: new THREE.TextureLoader().load(texture.matcap),
  //   map: new THREE.TextureLoader().load(texture.env),
  // });

  return (
    <>
      <group>
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

        <mesh ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#EF5B5B" />
        </mesh>

        <mesh ref={meshRef1} position-y={[-objectsDistance * 1]}>
          <boxGeometry args={[1, 1, 1]} wireframe={true} />
          <meshStandardMaterial color="#20A39E" />
        </mesh>

        <mesh ref={meshRef2} position-y={[-objectsDistance * 2]}>
          <ambientLight />
          <directionalLight />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#FFBA49" />
        </mesh>

        <mesh ref={meshRef3} position-y={[-objectsDistance * 3]}>
          <ambientLight />
          <directionalLight />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#A4A9AD" />
        </mesh>
      </group>
    </>
  );
}
