import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  // OrbitControls,
  Environment,
  ScrollControls,
  Loader,
  // softShadows,
  Scroll,
} from "@react-three/drei";
import "./App.scss";
import UnoComponent from "./components/UnoModel";
import SuComponent from "./components/SiteOne";
import SideBar from "./components/SideBar";
import Lights from "./components/Lights";
import Rig from "./rig";
import Plane from "./components/Plane";
import TextComponent from "./components/TextComponent";
import SupportLights from "./components/SupportLight";
// import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";

// softShadows();

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
        <fog attach="fog" args={["red", 50, 60]} />
        <color attach="background" args={["#17171b"]} />

        <Suspense fallback={null}>
          <PerspectiveCamera
            fov={45}
            position={[0.111, -0.932, 2.191]}
            rotation={[0.0, -6.2, 0.0]}
          >
            <ScrollControls
              infinite={false}
              damping={0.5}
              pages={2}
              horizontal={true}
            >
              <Scroll>
                <TextComponent />
                <UnoComponent />
                <SuComponent />
                <ambientLight color={"purple"} intensity={3.7} />
                <Lights />
                <SupportLights />
                <Plane />
              </Scroll>
            </ScrollControls>
          </PerspectiveCamera>
          <Environment preset="city" />
        </Suspense>
        <Rig />
        // <EffectComposer multisampling={0}>
        //   <Bloom intensity={1.25} kernelSize={2} luminanceThreshold={0.8} luminanceSmoothing={0.0} />
        // </EffectComposer>
      </Canvas>
      <div className="layer" />
      <Loader />
    </>
  );
};
export default App;
