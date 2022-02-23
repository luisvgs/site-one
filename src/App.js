import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  ScrollControls,
  Loader,
  useScroll,
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
import PostProcessing from "./PostProcessing";
// import { softShadows } from "@react-three/drei";

// softShadows();
// Camera path
const cameraPositionCurve = new THREE.CatmullRomCurve3([
  // 1ra escena
  new Vector3(0.111, 0.11, 5.2),
  // 2da escena
  new Vector3(-2, 0.05, 5.2),
  // 3ra escena
  new Vector3(0.32, 0.7, 4.65),
  new Vector3(0, 1.3, 3.5),
]);

const cameraLookAtCurve = new THREE.CatmullRomCurve3([
  new Vector3(0, 0.2, 2),
  new Vector3(0, 0, -900),
  new Vector3(0, -2.9, -12.8),
  new Vector3(0, 0.2, -12.8),
]);

const cameraLookAt = new Vector3(0, 0, 0);
const Setup = () => {
  const scroll = useScroll();
  useFrame((state) => {
    //NOTE: Here's the camera movement
    cameraPositionCurve.getPoint(scroll.offset, state.camera.position);
    cameraLookAtCurve.getPoint(scroll.offset, cameraLookAt);
    state.camera.lookAt(cameraLookAt);
  });

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
        <PostProcessing />
      </Canvas>
      <div className="layer" />
      <Loader />
    </>
  );
};
export default App;
