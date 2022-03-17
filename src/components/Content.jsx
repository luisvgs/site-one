import { Html } from "@react-three/drei";
import Carrusel from "./Carousel";
import React, { useState } from "react";

const Content = () => {
  const [hidden, set] = useState();
  return (
    <Html
      className="cont"
      rotation={[-Math.PI, 0, 0]}
      position={[-2.4, 0.367, 0.035]}
      transform
      occlude
      onOcclude={set}
      style={{
        transition: "all 0.8s",
        opacity: hidden ? 0 : 0.8,
        transform: `scale(${hidden ? 0.0 : 0.54})`,
      }}
    >
      <div className="wrapper">
        <Carrusel />
      </div>
    </Html>
  );
};

export default Content;
