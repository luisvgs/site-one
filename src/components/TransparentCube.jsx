import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Cube from "../models/Transparent_Cube.glb";

const TransparentCube = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(Cube);
  return (
    <group ref={group} scale={[0.3, 0.3, 0.3]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
    </group>
  );
};

export default TransparentCube;
useGLTF.preload("/Transparent_Cube.glb");
