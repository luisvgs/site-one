import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import "./App.scss";
import Burger from "./components/Burger";
import Menu from "./components/Menu";
import OnClickOutside from "./components/OnClickOutside";
import { useSnapshot } from "valtio";
import { state } from "./state";
import Media from "react-media";
import PhoneView from "./PhoneView";
import DesktopView from "./DesktopView";

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
        <Media queries={{ small: { maxWidth: 617 } }}>
          {(matches) => (matches.small ? <PhoneView /> : <DesktopView />)}
        </Media>
      </Canvas>
      <Loader />
    </>
  );
};
export default App;
