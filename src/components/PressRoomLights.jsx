import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";

const PressRoomLights = ({ ...props }) => {
  const group = useRef();
  const light = useRef();
  const light1 = useRef();
  const light2 = useRef();
  const light3 = useRef();
  const light4 = useRef();
  const light5 = useRef();
  const light6 = useRef();
  const light7 = useRef();
  useHelper(light, PointLightHelper, 0.5, "cyan");
  useHelper(light1, PointLightHelper, 0.5, "red");
  useHelper(light2, PointLightHelper, 0.5, "red");
  useHelper(light3, PointLightHelper, 0.5, "red");
  useHelper(light4, PointLightHelper, 0.5, "red");
  useHelper(light5, PointLightHelper, 0.5, "red");
  useHelper(light6, PointLightHelper, 0.5, "red");
  useHelper(light7, PointLightHelper, 0.5, "red");
  return (
    <group ref={group} position={[16.9, -3, 2.0]}>
      <group
        position={[-4.55, 3.44, 2.1]}
        rotation={[3.05, -1.24, 0.02]}
        scale={0.77}
      >
        <pointLight
          ref={light7}
          intensity={25}
          decay={2}
          color="#5280ff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        position={[-1.41, 3.63, 1.99]}
        rotation={[3.05, -1.24, 0.02]}
        scale={0.77}
      >
        <pointLight
          ref={light1}
          intensity={55}
          decay={2}
          color="blue"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        position={[1.6, 3.6, 1.96]}
        rotation={[3.05, -1.24, 0.02]}
        scale={0.77}
      >
        <pointLight
          ref={light1}
          intensity={15}
          decay={2}
          color="#5280ff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        position={[4.95, 3.65, 1.9]}
        rotation={[3.05, -1.24, 0.02]}
        scale={0.77}
      >
        <pointLight
          ref={light2}
          intensity={15}
          decay={2}
          color="#5280ff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        position={[-7.35, -1.78, -0.98]}
        rotation={[3.05, -1.24, 0.02]}
        scale={[0.67, 0.57, 1.18]}
      >
        <pointLight
          ref={light3}
          intensity={68.7}
          decay={2}
          color="#074aff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        position={[-2.34, -1.65, -1.06]}
        rotation={[3.05, -1.24, 0.02]}
        scale={[0.67, 0.57, 1.18]}
      >
        <pointLight
          ref={light4}
          intensity={68.7}
          decay={2}
          color="#074aff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        position={[2.47, -1.66, -1.09]}
        rotation={[3.05, -1.24, 0.02]}
        scale={[0.67, 0.57, 1.18]}
      >
        <pointLight
          ref={light5}
          intensity={68.7}
          decay={2}
          color="#074aff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        position={[7.82, -1.63, -1.13]}
        rotation={[3.05, -1.24, 0.02]}
        scale={[0.67, 0.57, 1.18]}
      >
        <pointLight
          ref={light6}
          intensity={68.7}
          decay={2}
          color="#074aff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

export default PressRoomLights;
