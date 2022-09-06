import React, { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, BakeShadows, Loader, Preload } from "@react-three/drei";
import "./App.scss";
import { Burger, Menu } from "./components/Menu";
import { OnClickOutside, PostProcessing } from "./utils";
import { useSnapshot } from "valtio";
import { state } from "./store/state";
import Media from "react-media";
import { DesktopView, PhoneView } from "./views";

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
                  <DesktopView /> <Preload /> <BakeShadows />{" "}
                  <AdaptiveDpr pixelated />
                </>
              )
            }
          </Media>
        </Suspense>
        {/* <PostProcessing /> */}
      </Canvas>
      <Loader />
    </>
  );
};
export default App;
