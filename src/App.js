import React, { useRef, useState, Suspense } from "react";
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
import FirstScene from "./components/FirstScene";
import SecondScene from "./components/SecondScene";
import ThirdScene from "./components/ThirdScene";
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
  new Vector3(0.111, 0.11, 5.2),
  // 2da escena
  new Vector3(-2, 0.05, 5.2),
  // 3ra escena
  new Vector3(0.32, 0.5, 4.8),
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
  const snap = useSnapshot(state);
  const scroll = useScroll();
  const dummy = new THREE.Vector3();
  const lookAtPos = new THREE.Vector3();
  useFrame((state) => {
    const step = 0.1;
    if (snap.clicked === 1) {
      state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, 10, step);
      state.camera.position.lerp(
        dummy.set(
          snap.clicked === 1 ? 25 : 10,
          snap.clicked === 1 ? 1 : 5,
          snap.clicked === 1 ? 0 : 10
        ),
        step
      );

      lookAtPos.x = Math.sin(state.clock.getElapsedTime() * 2);

      state.camera.lookAt(lookAtPos);
      state.camera.updateProjectionMatrix();
    } else {
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
            fov={50}
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
        {/* <OrbitControls /> */}
        {/* <PostProcessing /> */}
        {/* <Effects /> */}
      </Canvas>
      <div>
        <section style={{ height: "100vh" }} id="page-1"></section>
      </div>
      <div>
        <section style={{ height: "100vh" }} id="page-2"></section>
      </div>
      {/* <div className="layer" /> */}
      <Loader />
    </>
  );
};
export default App;
