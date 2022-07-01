import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const ContactLights = ({ ...props }) => {
  const group = useRef();
  return (
    <group ref={group} position={[19.68, 0.65, 2]} dispose={null}>
      <group position={[-5.62, 4.48, 0.51]}>
        <pointLight
          intensity={89}
          decay={2}
          color="#74b2ff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[5.54, 4.48, 0.51]}>
        <pointLight
          intensity={30}
          decay={2}
          color="#9ffff7"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[0.64, 5.92, -0.52]}>
        <pointLight
          intensity={80}
          decay={2}
          color="#1c5bff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

export default ContactLights;
useGLTF.preload("/Contact Focos.glb");
