import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import AppleModel from "../models/apple.glb";

const Apple = (props) => {
  const [hovered, setHover] = useState(false);
  const group = useRef();
  const { nodes, materials } = useGLTF(AppleModel);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = 0.8 + Math.sin(t / 0.8) / 32;
  });
  return (
    <mesh
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHover(false);
      }}
      ref={group}
      castShadow
      receiveShadow
      position={[6.405, 0.75, 2]}
      scale={[1, 1, 1]}
      {...props}
      dispose={null}
    >
      {hovered && (
        <Html position={[1.2, 0.4, -2]} distanceFactor={65}>
          <div class="content">Descripcion del partership con Apple.</div>
        </Html>
      )}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve022.geometry}
        material={materials["Material.010"]}
      />
    </mesh>
  );
};

useGLTF.preload("/apple.glb");
export default Apple;
