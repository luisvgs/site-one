import { Html, Box } from "@react-three/drei";
import NewsCard from "./NewsCard";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import PressModel from "../models/PressRoom.glb";
import PressRoomLights from "../components/PressRoomLights";

const PressRoomComponent = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(PressModel);
  return (
    <>
      <group
        ref={group}
        position={[14.9, 0.7, 2.0]}
        scale={[0.2, 0.2, 0.2]}
        {...props}
        dispose={null}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Article_1.geometry}
          material={materials["Material.017"]}
          position={[-5.11, 0.5, 1.13]}
          rotation={[0, -Math.PI / 3, -Math.PI / 2]}
          scale={[1.53, 0.77, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.article_2.geometry}
          material={materials["Material.017"]}
          position={[-2.53, 0.51, 0.05]}
          rotation={[0, -1.31, -Math.PI / 2]}
          scale={[1.53, 0.77, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.article_3.geometry}
          material={materials["Material.017"]}
          position={[0.09, 0.51, -0.32]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[1.53, 0.77, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.article_4.geometry}
          material={materials["Material.017"]}
          position={[2.94, 0.51, 0.08]}
          rotation={[Math.PI, -1.31, Math.PI / 2]}
          scale={[1.53, 0.77, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.article_5.geometry}
          material={materials["Material.017"]}
          position={[5.39, 0.51, 1.12]}
          rotation={[Math.PI, -Math.PI / 3, Math.PI / 2]}
          scale={[1.53, 0.77, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Move_left_button001.geometry}
          material={materials["Light Blue variant 2.001"]}
          position={[-1.66, -2.59, 1.71]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.81}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Move_right_button001.geometry}
          material={materials["Light Blue variant 2.001"]}
          position={[1.86, -2.58, 2.1]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={0.81}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Year_display_.geometry}
          material={materials["Light Blue. Variant 1.001"]}
          position={[-1.28, -1.83, 2.22]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.58}
        />
        <group position={[0.09, -3.25, 2.24]} scale={0.67}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={materials["Metal.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials["Light Blue.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Light Bluev2.001"]}
          position={[0.09, -3.1, 2.24]}
          scale={[0.33, 0.24, 0.33]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials["Haz de luz"]}
          position={[0.09, -2.73, 2.24]}
          scale={0.34}
        />
        <group position={[-1.84, -1.62, 1.85]} scale={4.57}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane024.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane024_1.geometry}
            material={materials["Material.017"]}
          />
        </group>
      </group>
    </>
  );
};

export default PressRoomComponent;
useGLTF.preload("/Press Room.glb");
