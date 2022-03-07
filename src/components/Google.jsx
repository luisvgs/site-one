import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import GoogleModel from "../models/google.glb";
import { useFrame } from "@react-three/fiber";

const Google = (props) => {
  const [hovered, setHover] = useState(false);
  const group = useRef();
  const { nodes, materials } = useGLTF(GoogleModel);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = 0.8 + Math.sin(t + 0.01 / 0.5) / 32;
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
      position={[6.405, 0.75, 2]}
      scale={[1, 1, 1]}
      ref={group}
      {...props}
      dispose={null}
    >
      {hovered && (
        <Html 
        position={[1.105, 0.1, -2]} distanceFactor={65}>
          <div class="content">Descripcion del partership con Google.</div>
        </Html>
      )}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve015.geometry}
        material={nodes.Curve015.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve016.geometry}
        material={nodes.Curve016.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve017.geometry}
        material={nodes.Curve017.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve018.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve019.geometry}
        material={nodes.Curve019.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve020.geometry}
        material={materials["Material.003"]}
      />
    </mesh>
  );
};

useGLTF.preload("/google.glb");
export default Google;
