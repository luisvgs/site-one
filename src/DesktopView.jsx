import React, { Suspense } from "react";
import {
  PerspectiveCamera,
  Environment,
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import "./App.scss";
import Rig from "./rig";
import Setup from "./components/Setup";

const DesktopView = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollControls damping={1} distance={1} pages={3} horizontal>
          <PerspectiveCamera
            onUpdate={(c) => c.updateProjectionMatrix()}
            fov={35}
            position={[0.111, -0.932, 2.191]}
            rotation={[0.0, -6.2, 0.0]}
          >
            <Setup />
          </PerspectiveCamera>
        </ScrollControls>
        <Environment preset="city" />
      </Suspense>
      <Rig />
    </>
  );
};

export default DesktopView;
