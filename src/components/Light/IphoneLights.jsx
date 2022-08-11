import React, { useRef } from "react";
import { useHelper, useGLTF } from "@react-three/drei";
import { PointLightHelper } from "three";

const IphoneLights = ({ position }) => {
  const group = useRef();
  const light = useRef();
  const light1 = useRef();
  const light2 = useRef();
  const light3 = useRef();
  const light4 = useRef();
  return (
    <group position={position} scale={[1, 1, 1]}>
      <mesh ref={group} castShadow>
        <group ref={group} dispose={null}>
          <group position={[-0.8, -0.01, -0.01]}>
            <pointLight
              intensity={1}
              decay={2}
              color="#ff1624"
              rotation={[-Math.PI / 2, 0, 0]}
              ref={light}
            />
          </group>
          <group position={[0.57, 0.52, -0.07]}>
            <pointLight
              intensity={1}
              decay={2}
              color="#0477ff"
              rotation={[-Math.PI / 2, 0, 0]}
              ref={light1}
            />
          </group>
          <group position={[-0.34, 0.52, 0.34]}>
            <pointLight
              intensity={13}
              decay={2}
              color="#0c20ff"
              rotation={[-Math.PI / 2, 0, 0]}
              ref={light2}
            />
          </group>
          <group position={[-0.16, 0.85, -0.08]} scale={[0.55, 0.55, 0.55]}>
            <pointLight
              intensity={10}
              decay={2}
              rotation={[-Math.PI / 2, 0, 0]}
              ref={light3}
            />
          </group>
          <group position={[1.2, -0.45, -0.07]}>
            <pointLight
              intensity={15}
              decay={2}
              color="#0477ff"
              rotation={[-Math.PI / 2, 0, 0]}
              ref={light4}
            />
          </group>
        </group>
      </mesh>
    </group>
  );
};

useGLTF.preload("/Smarthphone.glb");
export default IphoneLights;
