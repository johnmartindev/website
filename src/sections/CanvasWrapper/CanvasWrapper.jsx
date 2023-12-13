import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Experience from "../Experience/Experience";
import gsap from "gsap/gsap-core";

export default function CanvasWrapper() {
  // gsap.to(modelMonogram.scene.position, {
  //   // x: 3.4,
  //   z: ,
  //   // z: 0.4,
  //   duration: 3,
  //   ease: "power4.in",
  // });

  return (
    <Canvas
      onCreated={(state) => {
        gsap.to(state.camera.position, {
          x: 0,
          y: 0,
          z: 7,
          duration: 3,
          ease: "bounce.in",
        });
      }}
      id="experience-canvas"
      gl={{
        alpha: true,
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        // outputColorSpace: THREE.SRGBColorSpace
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 1],
      }}
    >
      <Experience />
    </Canvas>
  );
}
