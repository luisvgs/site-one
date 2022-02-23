import React, { useRef } from "react";
import { useGLTF, PresentationControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import AppleModel from "../models/apple.glb";
import * as THREE from "three";

const Apple = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(AppleModel);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = 0.8 + Math.sin(t / 0.5) / 32;
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
      <PresentationControls
        snap={{ mass: 7, tension: 1900 }}
        rotation={[0, 0.05, 0]}
        polar={[0, Math.PI / 2]}
        azimuth={[-Math.PI, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve022.geometry}
          material={materials["Material.010"]}
        />
      </PresentationControls>
    </group>
  );
};

useGLTF.preload("/apple.glb");
export default Apple;
