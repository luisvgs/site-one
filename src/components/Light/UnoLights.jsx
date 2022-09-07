import React, { useRef } from "react";
import { useHelper, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { PointLightHelper } from "three";

const UnoLights = ({ ...props }) => {
  const group = useRef();
  const light = useRef();
  const light1 = useRef();
  const light2 = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.8, -0.01, -0.01]}>
        <pointLight
          ref={light}
          intensity={15}
          decay={2}
          color="#ff1624"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[0.57, 0.52, -0.07]}>
        <pointLight
          intensity={20}
          decay={2}
          color="#0477ff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-0.34, 0.52, 0.34]}>
        <pointLight
          ref={light1}
          intensity={14}
          decay={2}
          color="#0c20ff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-0.16, 0.85, -0.08]} scale={0.55}>
        <pointLight intensity={10} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  );
};

useGLTF.preload("/Focos.glb");
export default UnoLights;
