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
      position={[-6, 0.367, 0.035]}
      transform
      // occlude
      // onOcclude={set}
      distanceFactor={1}
      style={{
        transition: "all 0.8s",
        // opacity: hidden ? 0 : 1,
        transform: `scale(0.9)`,
      }}
    >
      <div className="wrapper" style={{ height: "58vh", width: "40vh" }}>
        <ContactForm />
      </div>
    </Html>
  );
};

export default Content;
