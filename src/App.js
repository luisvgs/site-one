import React, { useLayoutEffect, useRef, useState, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { AdaptiveDpr, BakeShadows, Loader, Preload } from "@react-three/drei";
import "./App.scss";
import Burger from "./components/Burger";
import Menu from "./components/Menu";
import OnClickOutside from "./components/OnClickOutside";
import { useSnapshot } from "valtio";
import { state } from "./state";
import Media from "react-media";
import PhoneView from "./PhoneView";
import DesktopView from "./DesktopView";
import PostProcessing from "./PostProcessing";

function Precompile() {
  const { gl, scene, camera } = useThree();
  useLayoutEffect(() => void gl.compile(scene, camera), []);
  return null;
}

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
        concurrent
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        // shadows
        flat
        gl={{
          antialias: false,
          physicallyCorrectLights: true,
        }}
      >
        <Suspense fallback={null}>
          <Media queries={{ small: { maxWidth: 617 } }}>
            {(matches) =>
              matches.small ? (
                <PhoneView />
              ) : (
                <>
                  <DesktopView /> <Preload all /> <BakeShadows />{" "}
                  <AdaptiveDpr pixelated />
                </>
              )
            }
          </Media>
        </Suspense>
        <PostProcessing />
      </Canvas>
      <Loader />
    </>
  );
};
export default App;
