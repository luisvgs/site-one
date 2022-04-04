import { Html } from "@react-three/drei";
import React, { useState } from "react";
import ContactForm from "./ContactForm";

const Content = () => {
  const [hidden, set] = useState(false);
  return (
    <Html
      zIndexRange={[1, 0]}
      className="html-wrapper"
      rotation={[-Math.PI, 0, 0]}
      position={[0.013, -0.7, 0.035]}
      // transform
      // occlude
      // onOcclude={set}
      distanceFactor={1}
      // style={{
      //   transition: "all 0.8s",
      //   opacity: hidden ? 0 : 1,
      //   transform: `scale(${hidden ? 0.0 : 0.54})`,
      // }}
    >
      <div className="wrapper" style={{ height: "40vh", width: "55vh" }}>
        <ContactForm />
      </div>
    </Html>
  );
};

export default Content;
