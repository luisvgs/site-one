import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import MicrosoftModel from "../models/microsoft.glb";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const Microsoft = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(MicrosoftModel);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = 0.8 + Math.sin(t / 0.9) / 32;
  });

  return (
    <group
      position={[6.405, 0.75, 2]}
      scale={[1, 1, 1]}
      ref={group}
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve021.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve023.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve024.geometry}
        material={nodes.Curve024.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve025.geometry}
        material={nodes.Curve025.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve026.geometry}
        material={nodes.Curve026.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve027.geometry}
        material={nodes.Curve027.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve029.geometry}
        material={nodes.Curve029.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve031.geometry}
        material={nodes.Curve031.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve032.geometry}
        material={nodes.Curve032.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve034.geometry}
        material={nodes.Curve034.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve036.geometry}
        material={materials["Material.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve037.geometry}
        material={materials["Material.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={nodes.Curve001.material}
      />
    </group>
  );
};

useGLTF.preload("/Microsoft.glb");
export default Microsoft;
