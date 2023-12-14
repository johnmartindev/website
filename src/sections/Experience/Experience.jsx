// Imports:
import * as THREE from "three";
// import { Perf } from "r3f-perf";
import { useRef, useEffect, Suspense, useState } from "react";
import { extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Cylinder,
  Environment,
  Float,
  Html,
  Plane,
  //ScrollControls,
  Sparkles,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { ShaderIntroPlaneMaterial } from "./shaders/introPlane/shaderIntroPlaneMaterial";
//import { ShaderProjectsPlaneMaterial } from "./shaders/projects/shaderProjectsPlaneMaterial";
//import { useControls } from "leva";
import { useSkillsStore } from "../../store/store";
import { skillsAssets } from "./skillsAssets/skillsAssets";
import { projectsAssets } from "./projectsAssets/projectsAssets";

//import gsap from "gsap/gsap-core";

export default function Experience() {
  const objectsDistance = 5;
  let containerMain = document.getElementById("wrapper-container");
  let containerIntro = document.getElementById("intro");
  let btnScrollToTop = document.getElementById("btn-scroll-to-top-wrapper");
  //const controls = useControls({ position: -2 });

  /* References:
   ******************************************/
  // 1. Intro refs:
  const meshIntroPlaneRef = useRef();
  const shaderIntroPlaneRef = useRef();
  const primitiveIntroMonogramRef = useRef();

  // const [monogramOpacity, setMonogramOpacity] = useState(1);
  // const monogramRef = useRef();

  const matcapTextureFile = `/matcaps/diamond/matcap-diamond.jpg`;
  const texture = {
    matcap: matcapTextureFile,
    skin: "/matcaps/diamond/skin.png",
    env: "/matcaps/diamond/env.png",
  };

  const materialIntroMonogram = new THREE.MeshMatcapMaterial({
    transparent: true,
    color: 0xcccccc,
    side: THREE.DoubleSide,
    matcap: new THREE.TextureLoader().load(texture.matcap),
    map: new THREE.TextureLoader().load(texture.env),
  });

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

  const handleProjectsCubePointerOver = (event, cubeID) => {
    event.stopPropagation();
    skillCubeHoveredRef.current = cubeID;
    skillWhiteGradient.style.opacity = 1;
  };

  const handleProjectsCubePointerOut = (event) => {
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
  //window.scrollTo(0, 0);

  /* Materials:
   ******************************************/
  extend({ ShaderIntroPlaneMaterial }); // Feels slower... no loader? Bring code back here:

  /* Models:
   ******************************************/
  const modelMonogram = useGLTF("./models/monogram-logo.gltf");

  modelMonogram.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = materialIntroMonogram;
    }
  });

  const PortalMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x999999,
    metalness: 0.9,
    roughness: 0.2,
  });

  extend({ PortalMaterial });

  modelMonogram.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = materialIntroMonogram;
    }
  });

  const screenModel = useGLTF(
    "./models/screen/screen.glb",
    (o) => {
      console.log(o);
    },
    (error) => {
      console.error("Error loading GLTF:", error);
    }
  );

  const Model = () => {
    const gltf = useGLTF("./models/screen/screen2.glb"); // Update with your model path

    if (!gltf.scene) {
      // Model is not loaded yet, you can render a loader or return null
      return null; // or a loader component
    }

    return (
      <>
        <Html
          rotation={[0, -Math.PI / 2, 0]}
          position-y={-1.5 + 1.9}
          position-x={-1.23}
          scale={1.5}
        >
          <iframe
            width="330"
            height="225"
            src="https://bruno-simon.com/html/"
          ></iframe>
        </Html>
        <primitive
          object={gltf.scene}
          rotation={[0, -Math.PI / 2, 0]}
          position-y={-1.5}
          position-x={-0.1}
          scale={1.5}
        />
      </>
    );
  };

  console.log(screenModel);

  // const bakedTexture = useTexture("./models/portal/baked.jpg");
  //bakedTexture.flipY = false;

  //const portalMaterial = useRef();

  //
  //
  //
  useEffect(() => {
    // Check if the model's scene is defined
    if (modelMonogram.scene) {
      modelMonogram.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = materialIntroMonogram;
        }
      });
      //
      // gsap.to(modelMonogram.scene.position, {
      //   // x: 3.4,
      //   z: ,
      //   // z: 0.4,
      //   duration: 3,
      //   ease: "power4.in",
      // });

      // scale={[0.4, 0.4, 0.4]}
      // //position={[2.5, -0.75, 5]}
      // position={[0.5, -0.75, 1]}
      // rotation={[0, 0.9, 0]}

      // Start the GSAP animation
    }
  }, []);

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
    console.log(cameraCp.position);

    // Handle scroll:
    const handleScroll = () => {
      const containerHeight = containerMain.offsetHeight;
      const containerTop = containerMain.getBoundingClientRect().top; // -scroll amount
      const containerIntroRect = containerIntro.getBoundingClientRect();
      const containerIntroHeight = containerIntroRect.height;
      const containerIntroOpacity = 1 - -containerTop / containerIntroHeight;

      // Make camera follow objects of each section:
      camera.position.y = (containerTop / containerHeight) * objectsDistance;

      // Display "scroll to top" button:
      const scrollToTopBtnShow = Math.abs(containerTop) < containerHeight / 2;
      btnScrollToTop.style.display = scrollToTopBtnShow ? "none" : "block";

      // Make opacity of intro plane fade to zero on scroll down:
      shaderIntroPlaneRef.current.uOpacity = containerIntroOpacity.toFixed(2);

      if (primitiveIntroMonogramRef.current) {
        primitiveIntroMonogramRef.current.material.opacity = Math.max(
          containerIntroOpacity,
          0
        );
        primitiveIntroMonogramRef.current.material.transparent = true;
      }

      // Calculate opacity based on scroll position
      // const newOpacity = 1 - containerTop / containerIntroHeight;
      // setMonogramOpacity(Math.max(newOpacity, 0)); // Ensuring opacity is not less than 0
      //
      //shaderProjectsPlaneRef.current.uOpacity = 1;

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
    const { camera } = state;

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

    // 4. Projects carousel
    if (projectsRef.current) {
      projectsRef.current.rotation.y +=
        (rotation - projectsRef.current.rotation.y) * 0.1;
      // Update each cube in the carousel to face the camera
      projectsRef.current.children.forEach((child) => {
        child.lookAt(camera.position);
      });
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

  const projectsCubesAmount = 7;
  const projectsRef = useRef();
  const projectsTextures = useLoader(
    THREE.TextureLoader,
    projectsAssets.imagePaths
  );
  const materialProjectsCube = new THREE.MeshPhysicalMaterial({
    color: 0x999999,
    metalness: 0.9,
    roughness: 0.1,
  });
  const [rotation, setRotation] = useState(0);
  const angleStep = (2 * Math.PI) / projectsCubesAmount;

  useEffect(() => {
    // Find the element
    const nextButton = document.getElementById("btn-project-next");
    const prevButton = document.getElementById("btn-project-prev");
    const handleNextButtonClick = (e) => {
      e.preventDefault();
      setRotation((prevRotation) => prevRotation + angleStep);
    };
    const handlePrevButtonClick = (e) => {
      e.preventDefault();
      setRotation((prevRotation) => prevRotation - angleStep);
    };
    if (nextButton) {
      nextButton.addEventListener("click", handleNextButtonClick);
    }
    if (prevButton) {
      prevButton.addEventListener("click", handlePrevButtonClick);
    }
    return () => {
      if (nextButton) {
        nextButton.removeEventListener("click", handleNextButtonClick);
      }
      if (prevButton) {
        prevButton.removeEventListener("click", handlePrevButtonClick);
      }
    };
  }, [setRotation, angleStep]); // Dependencies array to update if these values change

  useFrame(() => {
    if (projectsRef.current) {
      projectsRef.current.rotation.y +=
        (rotation - projectsRef.current.rotation.y) * 0.1;
    }
  });
  const projectsCubes = Array.from(
    { length: projectsCubesAmount },
    (_, index) => {
      const angle = index * angleStep;
      const x = Math.cos(angle) * 3.5; // radius is the distance from the center
      const z = Math.sin(angle) * 3.5;
      const projectsMaterials = [
        materialProjectsCube,
        materialProjectsCube,
        materialProjectsCube,
        materialProjectsCube,
        new THREE.MeshPhysicalMaterial({
          // Assigning texture to the front face
          map: projectsTextures[index % projectsTextures.length],
          metalness: 0.9,
          roughness: 0.4,
        }),
        materialProjectsCube,
      ];
      const projectsCubeID = `projects-cube-${index}`;

      // Check if a skill cube is hovered over. If so, grow it:
      for (let i = 0; i < projectsCubesAmount; i++) {
        const projectsCubeID = `projects-cube-${i}`;
        const mesh = scene.getObjectByName(projectsCubeID);
        if (mesh) {
          if (skillCubeHoveredRef.current === projectsCubeID) {
            mesh.scale.set(0.7, 0.7, 0.7); // Grow when hovered
            containerMain.style.cursor = "pointer";
          } else {
            mesh.scale.set(0.5, 0.5, 0.5); // Shrink back to normal when not hovered
          }
        }
      }
      return (
        <mesh
          material={projectsMaterials}
          key={index}
          scale={[1.4, 1.5, 1]}
          position={[x, 0, z]}
          onClick={() => null}
          onPointerOut={handleProjectsCubePointerOut}
          onPointerOver={(e) =>
            handleProjectsCubePointerOver(e, projectsCubeID)
          }
        >
          <boxGeometry args={[1, 1, 2]} />
        </mesh>
      );
    }
  );

  return (
    <>
      <Suspense fallback={<LoadingIndicator />}>
        <Environment preset="city" />
        {/* <Perf position="bottom-left" /> */}
        <group>
          <ambientLight intensity={4} />
          {/* 1. Intro:
           ******************************************/}
          <Sparkles size={1} scale={8} speed={0.1} />
          <group>
            <primitive
              material={materialIntroMonogram}
              object={modelMonogram.scene}
              position={[0, -0.75, 1]}
              ref={primitiveIntroMonogramRef}
              rotation={[0, 2.5, 0]}
              scale={[0.4, 0.4, 0.4]}
            />
            <mesh
              ref={meshIntroPlaneRef}
              position-y={-0.1}
              scale={[2.5, 1.1, 1.5]}
            >
              <planeGeometry args={[3.5, 3.5]} />
              <shaderIntroPlaneMaterial
                opacity={0.1}
                ref={shaderIntroPlaneRef}
              />
            </mesh>
          </group>

          {/* 2. Skills:
           ******************************************/}
          <group
            position-y={[-objectsDistance * 1 - 0.1]}
            ref={skillsRef}
            rotation={[0, 0.2, 0]}
            scale={0.7}
          >
            <Float speed={2.5}>{cubes}</Float>
          </group>

          {/* 3. Projects:
           ******************************************/}
          <group
            ref={meshProjectsRef}
            rotation={[0, 0.2, 0]}
            position-y={[-objectsDistance * 2]}
          >
            <directionalLight intensity={2} position={[1, 1, 5]} />

            <group scale={0.35} ref={projectsRef}>
              {projectsCubes}
            </group>
            {/* <EffectComposer>
              <BrightnessContrast
                brightness={0.3} // brightness. min: -1, max: 1
                contrast={0.3} // contrast: min -1, max: 1
              />
            </EffectComposer> */}
          </group>

          {/* 4. Contact:
           ******************************************/}
          <group
            ref={meshProjectsRef}
            rotation={[0, 0, 0]}
            position-y={[-objectsDistance * 3]}
          >
            <Model />
          </group>

          {/* <mesh geometry={nodes.baked.geometry}>
            <meshBasicMaterial map={bakedTexture} />
          </mesh>

          <mesh
            geometry={nodes.poleLightA.geometry}
            position={nodes.poleLightA.position}
          >
            <meshBasicMaterial color="#ffffe5" />
          </mesh>

          <mesh
            geometry={nodes.poleLightB.geometry}
            position={nodes.poleLightB.position}
          >
            <meshBasicMaterial color="#ffffe5" />
          </mesh>

          <mesh
            geometry={nodes.portalLight.geometry}
            position={nodes.portalLight.position}
            rotation={nodes.portalLight.rotation}
          >
            <portalMaterial ref={portalMaterial} />
          </mesh> */}
        </group>
      </Suspense>
    </>
  );
}
