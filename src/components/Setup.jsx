import React, { useEffect } from "react";
import { useScroll } from "@react-three/drei";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Partners from "./Partners";
import Portfolio from "./Portfolio";
import PressRoom from "./PressRoom";
import Contact from "./Contact";
import Plane from "./Plane";
import SupportLights from "./SupportLight";
import { Vector3 } from "three";
import * as THREE from "three";
import Lights from "./Lights";
import { useThree, useFrame } from "@react-three/fiber";
import { state } from "../state";

const LOOKAT = {
  HOME: new Vector3(-1.1, 0.1, -12.8),
  ABOUT: new Vector3(2.2, -0.4, -12.8),
  PARTNERS: new Vector3(7, -2.9, -12.8),
  PORTFOLIO: new Vector3(9, -0, -12.8),
  NEWS: new Vector3(13.85, 0, -12.8),
  CONTACT: new Vector3(19.4, -0.2, 0),
};

const POSITION = {
  HOME: new Vector3(0.5, 0.1, 5.1),
  ABOUT: new Vector3(5.1, 0.1, 4.6),
  PARTNERS: new Vector3(10.0, 0.58, 4.3),
  PORTFOLIO: new Vector3(16.4, 0.5, 3.9),
  NEWS: new Vector3(23.45, -0.8, 4.5),
  CONTACT: new Vector3(30.6, 0.37, 3.7),
};

const SCROLL_POSITION = {
  HOME: 0,
  ABOUT: 0.2,
  PARTNERS: 0.4,
  PORTFOLIO: 0.6,
  NEWS: 0.8,
  CONTACT: 1,
};

const SECTIONS = ["HOME", "ABOUT", "PARTNERS", "PORTFOLIO", "NEWS", "CONTACT"];

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
      <AboutUs />
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
