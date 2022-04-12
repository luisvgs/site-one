import React, { useEffect } from "react";
import { useScroll } from "@react-three/drei";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Partners from "./Partners";
import Portfolio from "./Portfolio";
import News from "./News";
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
  NEWS: new Vector3(11.7, 0, -12.8),
  CONTACT: new Vector3(16.03, 0, 0),
};

const POSITION = {
  HOME: new Vector3(0.5, 0.1, 5.1),
  ABOUT: new Vector3(5.1, 0.1, 4.6),
  PARTNERS: new Vector3(10.0, 0.58, 4.3),
  PORTFOLIO: new Vector3(16.4, 0.5, 3.9),
  NEWS: new Vector3(20.03, 0.42, 3.8),
  CONTACT: new Vector3(25.5, 0.5, 3.3),
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

const Setup = () => {
  const ref = useRef();
  const snap = useSnapshot(state);

  const scroll = useScroll();
  const { size } = useThree();
  const page = 3;

  useEffect(() => {
<<<<<<< HEAD
    // scroll.el.scrollLeft = size.width * page;
=======
    scroll.el.scrollLeft = size.width * 2 * SCROLL_POSITION[SECTIONS[page]];
>>>>>>> 4be0806... chore: removed unnecesary packages
  }, [page, scroll.el, size.width]);

  useFrame((state) => {
    const step = 0.02;
    switch (snap.clicked) {
      case 1:
        state.camera.lookAt(new Vector3(2.2, -0.4, -12.8));
        state.camera.position.lerp(new Vector3(5.1, 0.1, 4.6), step);
        state.camera.updateProjectionMatrix();
        break;
      case 2:
        state.camera.lookAt(new Vector3(7, -2.9, -12.8));
        state.camera.position.lerp(new Vector3(10.0, 0.58, 4.3), step);
        state.camera.updateProjectionMatrix();
        break;
      case 3:
        state.camera.lookAt(new Vector3(9, -0, -12.8));
        state.camera.position.lerp(new Vector3(16.4, 0.5, 3.9), step);
        state.camera.updateProjectionMatrix();
        break;
      case 4:
        state.camera.lookAt(new Vector3(11.7, 0, -12.8));
        state.camera.position.lerp(new Vector3(20.03, 0.42, 3.8), step);
        state.camera.updateProjectionMatrix();
        break;
      case 5:
        state.camera.lookAt(new Vector3(16.03, 0, 0));
        state.camera.position.lerp(new Vector3(25.5, 0.5, 3.3), step);
        state.camera.updateProjectionMatrix();
        break;
      default:
        cameraPositionCurve.getPoint(scroll.offset, state.camera.position);
        cameraLookAtCurve.getPoint(scroll.offset, cameraLookAt);
        state.camera.lookAt(cameraLookAt);
        break;
    }
  });

  return (
    <>
      <Home />
      <AboutUs />
      <Partners />
      <Portfolio />
      <News />
      <Contact />
      <ambientLight color={"#351f4f"} intensity={0.98} />
      <Lights />
      <SupportLights />
      <Plane />
    </>
  );
};

export default Setup;
