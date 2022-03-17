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
import Burger from "./components/Burger";
import Menu from "./components/Menu";
import OnClickOutside from "./components/OnClickOutside";
import { useSnapshot, subscribe } from "valtio";
import { state } from "./state";
import Setup from "./components/Setup";

const App = () => {
  const snap = useSnapshot(state);
  const [open, setOpen] = useState(false);
  const node = useRef();
  OnClickOutside(node, () => setOpen(false));
  return (
    <>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} props={snap} setOpen={setOpen} />
      </div>
      <Canvas
        dpr={[1, 2]}
        shadows
        colorManagement
        flat
        gl={{
          physicallyCorrectLights: true,
        }}
      >
        <fog attach="fog" args={["red", 50, 60]} />
        <color attach="background" args={["#17171b"]} />
        <Suspense fallback={null}>
          <ScrollControls damping={1} distance={1} pages={3} horizontal={true}>
            <PerspectiveCamera
              fov={35}
              position={[0.111, -0.932, 2.191]}
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
        {/* <OrbitControls /> */}
        {/* <PostProcessing /> */}
        {/* <Effects /> */}
      </Canvas>
      <Loader />
    </>
  );
};
export default App;
