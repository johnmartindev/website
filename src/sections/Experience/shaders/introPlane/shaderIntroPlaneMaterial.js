import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { fragmentShader } from "./fragment";
import { vertexShader } from "./vertex";

export const ShaderIntroPlaneMaterial = shaderMaterial(
  {
    uColorStart: new THREE.Color("#ffffff"),
    uColorEnd: new THREE.Color("#000000"),
    uOpacity: 1,
    uTime: 0,
  },
  vertexShader,
  fragmentShader
);
