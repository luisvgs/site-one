import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  ScrollControls,
  Loader,
  Scroll,
} from "@react-three/drei";
import "./App.scss";
import UnoComponent from "./components/UnoModel";
import SuComponent from "./components/SiteOne";
import PostProcessing from "./PostProcessing";
import SideBar from "./components/SideBar";
import Lights from "./components/Lights";
import Rig from "./rig";
import Plane from "./components/Plane";
import TextComponent from "./components/TextComponent";
import SupportLights from "./components/SupportLight";

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
        <fog attach="fog" args={["#191920", 0, 15]} />
        <color attach="background" args={["#191920"]} />

        <Suspense fallback={null}>
          <PerspectiveCamera
            fov={45}
            position={[0.111, -0.932, 2.191]}
            rotation={[0.0, -6.2, 0.0]}
          >
            <ScrollControls damping={0.3} pages={2} horizontal={true}>
              <Scroll>
                <TextComponent />
                <UnoComponent />
                <SuComponent />
                <Lights />
                <SupportLights />
                <ambientLight color={"purple"} intensity={3.7} />
                <Plane />
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
