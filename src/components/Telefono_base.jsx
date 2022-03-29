import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import TelefonoBase from "../models/telefono_base.glb";
import { useSpring, animated } from "@react-spring/three";

const IphoneBase = ({ position }) => {
  const { nodes } = useGLTF(TelefonoBase);

  const spring = useSpring({
    loop: true,
    from: { position: [0.46, -0.4, -0.41] },
    to: [{ position: [0.46, -0.2, -0.41] }, { position: [0.46, -0.4, -0.41] }],
    config: { duration: "7000" },
    delay: 700,
  });

  const props = useSpring({
    loop: true,
    from: {
      position: [0.2, -0.03, -0.21],
    },
    to: [{ position: [0.2, -0.17, -0.21] }, { position: [0.2, -0.03, -0.21] }],
    config: { duration: "7000" },
    delay: 700,
  });

  return (
    <mesh castShadow receiveShadow position={position} scale={[1, 1, 1]}>
      <mesh
        geometry={nodes.Cube033.geometry}
        material={nodes.Cube033.material}
        position={[0, -0.18, 0]}
        scale={[0.41, 0.33, 0.14]}
      />
      <mesh
        geometry={nodes.Cube034.geometry}
        material={nodes.Cube034.material}
        position={[0.83, -0.5, -0.47]}
      />
      <mesh
        geometry={nodes.Cube035.geometry}
        material={nodes.Cube035.material}
        position={[-0.64, -0.58, -0.32]}
      />
      {/* Mover */}
      <animated.mesh {...props}>
        <mesh
          geometry={nodes.Cube036.geometry}
          material={nodes.Cube036.material}
        />
      </animated.mesh>
      <mesh
        geometry={nodes.Cube037.geometry}
        material={nodes.Cube037.material}
        position={[-0.16, -0.1, -0.12]}
      />
      {/* Mover */}
      <animated.mesh {...spring}>
        <mesh
          geometry={nodes.Cube038.geometry}
          material={nodes.Cube038.material}
        />
      </animated.mesh>
      <mesh
        geometry={nodes.Cube039.geometry}
        material={nodes.Cube039.material}
        position={[-0.32, -0.29, -0.41]}
      />
      {/* mover */}
      <mesh
        geometry={nodes.Cube040.geometry}
        material={nodes.Cube040.material}
        position={[-0.56, -0.03, -0.21]}
      />
    </mesh>
  );
};

useGLTF.preload("/telefono_base.glb");
export default IphoneBase;
