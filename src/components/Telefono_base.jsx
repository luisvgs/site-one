import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import TelefonoBase from "../models/telefono_base.glb";

const IphoneBase = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(TelefonoBase);
  return (
    <mesh
      castShadow
      receiveShadow
      position={[10.27, 0.88, 2]}
      scale={[1, 1, 1]}
    >
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
      <mesh
        geometry={nodes.Cube036.geometry}
        material={nodes.Cube036.material}
        position={[0.2, -0.03, -0.21]}
      />
      <mesh
        geometry={nodes.Cube037.geometry}
        material={nodes.Cube037.material}
        position={[-0.16, -0.1, -0.12]}
      />
      <mesh
        geometry={nodes.Cube038.geometry}
        material={nodes.Cube038.material}
        position={[0.46, -0.17, -0.41]}
      />
      <mesh
        geometry={nodes.Cube039.geometry}
        material={nodes.Cube039.material}
        position={[-0.32, -0.29, -0.41]}
      />
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
