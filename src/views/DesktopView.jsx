import React, { Suspense } from "react";
import {
  PerspectiveCamera,
  Environment,
  ScrollControls,
} from "@react-three/drei";
import "../App.scss";
import Rig from "../utils/Rig";
import PostProcessing from "../utils/PostProcessing";
import { Setup } from "../components/Setup";

const DesktopView = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollControls damping={3} distance={1} pages={3} horizontal>
          <PerspectiveCamera
            fov={35}
            position={[0.111, -0.932, 2.191]}
            rotation={[0.0, -6.2, 0.0]}
          >
            <Setup />
          </PerspectiveCamera>
        </ScrollControls>
        <Environment preset="night" />
      </Suspense>
      <Rig />
    </>
  );
};

export default DesktopView;
