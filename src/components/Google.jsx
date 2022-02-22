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
    <group
      castShadow
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHover(false);
      }}
      receiveShadow
      position={[6.405, 0.75, 2]}
      scale={[1, 1, 1]}
      ref={group}
      {...props}
      dispose={null}
    >
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
      >
        {hovered && (
          <Html scaleFactor={1}>
            <div class="content">
              hello <br />
              world
            </div>
          </Html>
        )}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve020.geometry}
        material={materials["Material.003"]}
      />
    </group>
  );
};

useGLTF.preload("/google.glb");
export default Google;
