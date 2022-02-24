import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import AppleModel from "../models/apple.glb";

const Apple = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(AppleModel);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = 0.8 + Math.sin(t / 0.8) / 32;
  });
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
        geometry={nodes.Curve022.geometry}
        material={materials["Material.010"]}
      />
    </group>
  );
};

useGLTF.preload("/apple.glb");
export default Apple;
