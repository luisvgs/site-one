import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  ScrollControls,
  OrbitControls,
  Loader,
  useScroll,
  Scroll,
} from "@react-three/drei";
import "./App.scss";
import * as THREE from "three";
import FirstScene from "./components/FirstScene";
import SecondScene from "./components/SecondScene";
import ThirdScene from "./components/ThirdScene";
import FourthScene from "./components/FourthScene";
import Lights from "./components/Lights";
import Rig from "./rig";
import Plane from "./components/Plane";
import SupportLights from "./components/SupportLight";
import { Vector3 } from "three";
import Burger from "./components/Burger";
import Menu from "./components/Menu";
import OnClickOutside from "./components/OnClickOutside";
import { useSnapshot, subscribe } from "valtio";
import { state } from "./state";

// Camera path
const cameraPositionCurve = new THREE.CatmullRomCurve3([
  // 1ra escena
  new Vector3(0.111, 0.11, 5.0),
  // 2da escena
  new Vector3(-2, 0.35, 5.0), // Partners point
  new Vector3(-2, 0.12, 4.8), // Phone point
  // 3ra escena
  new Vector3(0.32, 0.8, 4.9),
]);

const cameraLookAtCurve = new THREE.CatmullRomCurve3([
  new Vector3(0, 0.2, 4),
  new Vector3(-10, 0, -90),
  new Vector3(-10, 0, 50),
]);

const cameraLookAt = new Vector3(0, 0, 0);
const Setup = () => {
  const snap = useSnapshot(state);
  const scroll = useScroll();
  const dummy = new THREE.Vector3();
  const lookAtPos = new THREE.Vector3();
  useFrame((state) => {
    const step = 0.4;
    if (snap.clicked === 1) {
      state.camera.position.lerp(new Vector3(3.5, 0.11, 4.8), step);
      state.camera.lookAt(new Vector3(2.5, -0.9, -12.8), 0.2);
      state.camera.updateProjectionMatrix();
    } else if (snap.clicked === 2) {
      state.camera.position.lerp(new Vector3(6.9, 0.38, 4.5), step);
      state.camera.lookAt(new Vector3(7, -0.7, -12.8));
      state.camera.updateProjectionMatrix();
    } 
    else if (snap.clicked === 3) {
      state.camera.position.lerp(new Vector3(10.92, 0.35, 3.9), step);
      state.camera.lookAt(new Vector3(9, -0, -12.8));
      state.camera.updateProjectionMatrix();

    } 
    else if (snap.clicked === 4) {
      state.camera.position.lerp(new Vector3(10.270, 0.88, 5.3), step);
      state.camera.lookAt(cameraLookAt);
      state.camera.updateProjectionMatrix();

    } 
    else {
      cameraPositionCurve.getPoint(scroll.offset, state.camera.position);
      cameraLookAtCurve.getPoint(scroll.offset, cameraLookAt);
      state.camera.lookAt(cameraLookAt);
    }
  });

  return (
    <>
      <FirstScene />
      <SecondScene />
      <ThirdScene />
      <FourthScene />
      <ambientLight color={"purple"} intensity={3.7} />
      <ambientLight color={"blue"} intensity={0.9} />
      <Lights />
      <SupportLights />
      <Plane />
    </>
  );
};

const App = () => {
  const snap = useSnapshot(state);
  const [open, setOpen] = useState(false);
  const node = useRef();
  subscribe(state, () => console.log("state has changed to", state));
  OnClickOutside(node, () => setOpen(false));
  return (
    <>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} props={snap} setOpen={setOpen} />
      </div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas
          dpr={[1, 2]}
          shadows
          colorManagement
          flat
          gl={{
            physicallyCorrectLights: true,
          }}
        >
          <fog attach="fog" args={["red", 50, 60]} />
          <color attach="background" args={["#17171b"]} />
          <Suspense fallback={null}>
            <PerspectiveCamera
              fov={35}
              position={[0.111, -0.932, 2.191]}
              rotation={[0.0, -6.2, 0.0]}
            >
              <ScrollControls
                damping={0.4}
                distance={1}
                pages={3}
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
          {/* <OrbitControls /> */}
          {/* <PostProcessing /> */}
          {/* <Effects /> */}
        </Canvas>
      </div>
      <Loader />
    </>
  );
};
export default App;
