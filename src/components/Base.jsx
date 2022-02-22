import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import BaseModel from "../models/partners_base.glb";

const Base = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(BaseModel);
  return (
    <group
      ref={group}
      castShadow
      receiveShadow
      position={[6.405, 0.75, 2]}
      scale={[1, 1, 1]}
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={nodes.Cube031.material}
        position={[-0.32, -0.29, -0.41]}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={nodes.Cube032.material}
        position={[-0.56, -0.03, -0.21]}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={nodes.Cube044.material}
        position={[0, -0.18, 0]}
        scale={[0.41, 0.33, 0.14]}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={nodes.Cube045.material}
        position={[0.83, -0.5, -0.47]}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={nodes.Cube046.material}
        position={[-0.64, -0.58, -0.32]}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={nodes.Cube047.material}
        position={[0.2, -0.03, -0.21]}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={nodes.Cube048.material}
        position={[-0.16, -0.1, -0.12]}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={nodes.Cube049.material}
        position={[0.46, -0.17, -0.41]}
      />{" "}
    </group>
  );
};

useGLTF.preload("/Base.glb");
export default Base;
