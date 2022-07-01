import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const PressRoomLights = ({ ...props }) => {
  const group = useRef();
  return (
    <group position={[14.9, 0.7, 2.0]} dispose={null}>
      <group
        position={[-4.55, 3.44, 2.1]}
        rotation={[3.05, -1.24, 0.02]}
        scale={0.77}
      >
        <pointLight
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
