import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Experience from "../Experience/Experience";

export default function CanvasWrapper() {
  return (
    <Canvas
      id="experience-canvas"
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        // outputColorSpace: THREE.SRGBColorSpace
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <Experience />
    </Canvas>
  );
}
