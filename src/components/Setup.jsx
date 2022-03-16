import { useScroll } from "@react-three/drei";
import FirstScene from "./FirstScene";
import React from "react";
import SecondScene from "./SecondScene";
import ThirdScene from "./ThirdScene";
import FourthScene from "./FourthScene";
import Plane from "./Plane";
import SupportLights from "./SupportLight";
import { Vector3 } from "three";
import * as THREE from "three";
import News from "./News";
import Lights from "./Lights";
import { useSnapshot } from "valtio";
import { useFrame, useThree } from "@react-three/fiber";
import { state } from "../state";

// Camera path
const cameraPositionCurve = new THREE.CatmullRomCurve3([
  // 1ra escena
  new Vector3(0.111, 0.11, 5.0),
  // 2da escena
  new Vector3(-2, 0.35, 5.0), // Partners point
  new Vector3(-2, 0.12, 4.8), // Phone point
  // 3ra escena
  new Vector3(0.32, 0.8, 4.9),
  new Vector3(0.32, 1.5, 4.9),
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
  const pages = 6;
  const { size } = useThree();

  useFrame((state) => {
    const step = 0.02;
    if (snap.clicked === 1) {
      state.camera.lookAt(new Vector3(2.2, -0.4, -12.8));
      state.camera.position.lerp(new Vector3(5.1, 0.1, 4.6), step);
      scroll.el.scrollLeft = size.height * pages;
      state.camera.updateProjectionMatrix();
    } else if (snap.clicked === 2) {
      state.camera.lookAt(new Vector3(7, -2.9, -12.8));
      state.camera.position.lerp(new Vector3(10.0, 0.58, 4.3), step);
      state.camera.updateProjectionMatrix();
    } else if (snap.clicked === 3) {
      state.camera.lookAt(new Vector3(9, -0, -12.8));
      state.camera.position.lerp(new Vector3(16.5, 0.5, 3.7), step);
      state.camera.updateProjectionMatrix();
    } else if (snap.clicked === 4) {
      state.camera.lookAt(new Vector3(11.7, 0, -12.8));
      state.camera.position.lerp(new Vector3(20.03, 0.42, 3.8), step);
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
      <FourthScene />
      <News />
      <ambientLight color={"purple"} intensity={3.7} />
      <ambientLight color={"blue"} intensity={0.9} />
      <Lights />
      <SupportLights />
      <Plane />
    </>
  );
};

// Camera path
export default Setup;
