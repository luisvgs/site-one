import React, { Suspense, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  ScrollControls,
  Loader,
  softShadows,
  PresentationControls,
  useScroll,
  Tube,
  Scroll,
} from "@react-three/drei";
import "./App.scss";
import * as THREE from "three";
import UnoComponent from "./components/UnoModel";
import SuComponent from "./components/SiteOne";
import SideBar from "./components/SideBar";
import Lights from "./components/Lights";
import Base from "./components/Base";
import Rig from "./rig";
import Plane from "./components/Plane";
import TextComponent from "./components/TextComponent";
import SupportLights from "./components/SupportLight";
import Google from "./components/Google";
import Microsoft from "./components/Microsoft";
import Apple from "./components/Apple";
import { Vector3 } from "three";
import {
  EffectComposer,
  Noise,
  SSAO,
  Bloom,
   
} from "@react-three/postprocessing";
// softShadows();

// Camera path
const cameraPositionCurve = new THREE.CatmullRomCurve3([
  // 1ra escena
  new Vector3(0.111, 0.11, 5.2),
  // 2da escena
  new Vector3(-2, 0.05, 5.5),
  // 3ra escena
  new Vector3(0, 1.0, 4.48),
]);

const cameraLookAtCurve = new THREE.CatmullRomCurve3([
  new Vector3(0, 0.2, 2),
  new Vector3(0, 0, -900),
  new Vector3(0, -2.9, -12.8),
  new Vector3(0, 0.2, -12.8),
]);

const cameraLookAt = new Vector3(0, 0, 0);
const Setup = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  const scroll = useScroll();
  // useFrame((state, delta) => {
  //   //NOTE: Here's the camera movement
  //   cameraPositionCurve.getPoint(scroll.offset, state.camera.position);
  //   cameraLookAtCurve.getPoint(scroll.offset, cameraLookAt);
  //   state.camera.lookAt(cameraLookAt);
  // });

  return (
    <>
      <TextComponent />
      <UnoComponent />
      <SuComponent />
      <Apple />
      <Google />
      <Microsoft />
      <Base />
      <ambientLight color={"purple"} intensity={3.7} />
      <ambientLight color={"blue"} intensity={0.9} />
      <Lights />
      <SupportLights />
      <Plane />
    </>
  );
};

const App = () => {
  return (
    <>
      <SideBar />
      <Canvas
        dpr={[1, 1.5]}
        shadows
        gl={{
          physicallyCorrectLights: true,
        }}
      >
        <fog attach="fog" args={["red", 50, 60]} />
        <color attach="background" args={["#17171b"]} />
        <Suspense fallback={null}>
          {/* <Tube args={[cameraPositionCurve, 64, 0.05]}>
            <meshStandardMaterial color="#ff00ff" />
          </Tube>
          <Tube args={[cameraLookAtCurve, 64, 0.05]}>
            <meshStandardMaterial color="#ffff00" />
          </Tube> */}
          <PerspectiveCamera
            fov={45}
            position={[0.111, -0.932, 2.191]}
            rotation={[0.0, -6.2, 0.0]}
          >
            <ScrollControls
              damping={0.4}
              distance={1}
              pages={2}
              horizontal={true}
            >
              <Scroll>
                <Setup />
              </Scroll>
            </ScrollControls>
          </PerspectiveCamera>
          <Environment preset="city" />
        </Suspense>
        <Rig />
        <EffectComposer multisampling={1}>
          {" "}
          <Noise opacity={0.01} />
        </EffectComposer>
        {/* <OrbitControls /> */}
      </Canvas>
      <div className="layer" />
      <Loader />
    </>
  );
};
export default App;
