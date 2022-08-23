import React, { useEffect } from "react";
import { useScroll } from "@react-three/drei";
import {
  Home,
  About,
  Partners,
  Portfolio,
  PressRoom,
  Contact,
} from "../scenes";
import { Plane } from "../common";
import { Lights, SupportLights } from "../Light";
import { Vector3 } from "three";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { state } from "../../store/state";

const LOOKAT = {
  HOME: new Vector3(-1.1, 0.1, -12.8),
  ABOUT: new Vector3(2.2, -0.4, -12.8),
  PARTNERS: new Vector3(7, -2.9, -12.8),
  PORTFOLIO: new Vector3(9, -0, -12.8),
  CONTACT: new Vector3(13.85, 1.7, -12.8),
  NEWS: new Vector3(19.4, -0.3, 0),
};

const POSITION = {
  HOME: new Vector3(0.5, 0.1, 5.1),
  ABOUT: new Vector3(5.1, 0.1, 4.46),
  PARTNERS: new Vector3(10.0, 0.58, 4.3),
  PORTFOLIO: new Vector3(16.4, 0.5, 3.8),
  CONTACT: new Vector3(23.4, 0.08, 3.69),
  NEWS: new Vector3(30.7, -0.9, 3.7),
};

const SCROLL_POSITION = {
  HOME: 0,
  ABOUT: 0.2,
  PARTNERS: 0.4,
  PORTFOLIO: 0.6,
  CONTACT: 0.8,
  NEWS: 1,
};

const SECTIONS = ["HOME", "ABOUT", "PARTNERS", "PORTFOLIO", "CONTACT", "NEWS"];

// Camera path
const cameraPositionCurve = new THREE.CatmullRomCurve3(
  SECTIONS.map((k) => POSITION[k])
);
const cameraLookAtCurve = new THREE.CatmullRomCurve3(
  SECTIONS.map((k) => LOOKAT[k])
);

const lookAt = new Vector3();
const position = new Vector3();
const step = 0.02;

const Setup = () => {
  const scroll = useScroll();
  const { size } = useThree();
  const page = state.clicked;

  useEffect(() => {
    scroll.el.scrollLeft = size.width * 2 * SCROLL_POSITION[SECTIONS[page]];
  }, [page, scroll.el, size.width]);

  useFrame((state) => {
    cameraPositionCurve.getPoint(scroll.offset, position);
    cameraLookAtCurve.getPoint(scroll.offset, lookAt);
    state.camera.lookAt(lookAt);
    state.camera.position.lerp(position, step);
  });

  return (
    <>
      <Home />
      <About />
      <Partners />
      <Portfolio />
      <Contact />
      <PressRoom />
      <ambientLight color={"#351f4f"} intensity={0.98} />
      <Lights />
      <SupportLights />
      <Plane />
    </>
  );
};

export default Setup;
