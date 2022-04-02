import React, { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  ScrollControls,
  Loader,
  Scroll,
} from "@react-three/drei";
import "./App.scss";
import Rig from "./rig";
import Setup from "./components/Setup";

const PhoneView = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollControls damping={1} distance={1} pages={3} horizontal>
          <PerspectiveCamera
            onUpdate={(c) => c.updateProjectionMatrix()}
            fov={35}
            position={[0.111, -0.932, 1.751]}
            rotation={[0.0, -6.2, 0.0]}
          >
            <Scroll>
              <Setup />
            </Scroll>
          </PerspectiveCamera>
        </ScrollControls>
        <Environment preset="city" />
      </Suspense>
      <Rig />
    </>
  );
};

export default PhoneView;
