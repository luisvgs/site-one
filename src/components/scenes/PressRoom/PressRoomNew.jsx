import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import PressModel from "../../../models/PressRoomV3.glb";

const PressRoomNew = ({ props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(PressModel);
  const { actions } = useAnimations(animations, group);
  return (
    <group scale={[0.2, 0.2, 0.2]} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Empty002"
          position={[0.09, -3.25, 2.24]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0}
        >
          <mesh
            name="Move_left_button001"
            castShadow
            receiveShadow
            geometry={nodes.Move_left_button001.geometry}
            material={materials["Light Blue variant 2.001"]}
            position={[1, -32, 16]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0}
          />
          <mesh
            name="Move_right_button001"
            castShadow
            receiveShadow
            geometry={nodes.Move_right_button001.geometry}
            material={materials["Light Blue variant 2.001"]}
            position={[1, -32, 16]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0}
          />
          <mesh
            name="Year_display_"
            castShadow
            receiveShadow
            geometry={nodes.Year_display_.geometry}
            material={materials["Light Blue. Variant 1.001"]}
            position={[1, -32, 16]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0}
          />
          <mesh
            name="Cylinder019"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019.geometry}
            material={materials["Haz de luz"]}
            position={[1, -32, 16]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0}
          />
        </group>
        <pointLight
          name="Article_background_light_1"
          intensity={250}
          decay={2}
          color="#5280ff"
          position={[-4.55, 3.44, 2.1]}
          rotation={[1.46, -0.01, -1.24]}
          scale={0.77}
        />
        <pointLight
          name="Article_background_light_2"
          intensity={250}
          decay={2}
          color="#5280ff"
          position={[-1.41, 3.63, 1.99]}
          rotation={[1.46, -0.01, -1.24]}
          scale={0.77}
        />
        <pointLight
          name="Article_background_light_3"
          intensity={250}
          decay={2}
          color="#5280ff"
          position={[1.6, 3.6, 1.96]}
          rotation={[1.46, -0.01, -1.24]}
          scale={0.77}
        />
        <pointLight
          name="Article_background_light_4"
          intensity={250}
          decay={2}
          color="#5280ff"
          position={[4.95, 3.65, 1.9]}
          rotation={[1.46, -0.01, -1.24]}
          scale={0.77}
        />
        <pointLight
          name="Article_background_light_1001"
          intensity={68.7}
          decay={2}
          color="#074aff"
          position={[-7.35, -1.78, -0.98]}
          rotation={[1.46, -0.01, -1.24]}
          scale={[0.67, 1.18, 0.57]}
        />
        <pointLight
          name="Article_background_light_2001"
          intensity={68.7}
          decay={2}
          color="#074aff"
          position={[-2.34, -1.65, -1.06]}
          rotation={[1.46, -0.01, -1.24]}
          scale={[0.67, 1.18, 0.57]}
        />
        <pointLight
          name="Article_background_light_3001"
          intensity={68.7}
          decay={2}
          color="#074aff"
          position={[2.47, -1.66, -1.09]}
          rotation={[1.46, -0.01, -1.24]}
          scale={[0.67, 1.18, 0.57]}
        />
        <pointLight
          name="Article_background_light_4001"
          intensity={68.7}
          decay={2}
          color="#074aff"
          position={[7.82, -1.63, -1.13]}
          rotation={[1.46, -0.01, -1.24]}
          scale={[0.67, 1.18, 0.57]}
        />
        <group name="Circle006" position={[0.09, -3.25, 2.24]} scale={0.67}>
          <mesh
            name="Circle002"
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={materials["Metal.003"]}
          />
          <mesh
            name="Circle002_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials["Light Blue.001"]}
          />
        </group>
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Light Bluev2.001"]}
          position={[0.09, -3.1, 2.24]}
          scale={[0.33, 0.24, 0.33]}
        />
        <mesh
          name="Article_1"
          castShadow
          receiveShadow
          geometry={nodes.Article_1.geometry}
          material={materials.Articulo}
          position={[-5.11, 0.5, 1.13]}
          rotation={[0, -Math.PI / 3, -Math.PI / 2]}
          scale={[1.53, 0.77, 1]}
        />
        <mesh
          name="article_2"
          castShadow
          receiveShadow
          geometry={nodes.article_2.geometry}
          material={materials.Articulo}
          position={[-2.53, 0.51, 0.05]}
          rotation={[0, -1.31, -Math.PI / 2]}
          scale={[1.53, 0.77, 1]}
        />
        <mesh
          name="article_3"
          castShadow
          receiveShadow
          geometry={nodes.article_3.geometry}
          material={materials.Articulo}
          position={[0.09, 0.51, -0.32]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[1.53, 0.77, 1]}
        />
        <mesh
          name="article_4"
          castShadow
          receiveShadow
          geometry={nodes.article_4.geometry}
          material={materials.Articulo}
          position={[2.94, 0.51, 0.08]}
          rotation={[Math.PI, -1.31, Math.PI / 2]}
          scale={[1.53, 0.77, 1]}
        />
        <mesh
          name="article_5"
          castShadow
          receiveShadow
          geometry={nodes.article_5.geometry}
          material={materials.Articulo}
          position={[5.39, 0.51, 1.12]}
          rotation={[Math.PI, -Math.PI / 3, Math.PI / 2]}
          scale={[1.53, 0.77, 1]}
        />
        <group
          name="Background_and_floor"
          position={[-1.84, -1.62, 1.85]}
          scale={4.57}
        >
          <mesh
            name="Plane024"
            castShadow
            receiveShadow
            geometry={nodes.Plane024.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            name="Plane024_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane024_1.geometry}
            material={materials["Material.017"]}
          />
        </group>
      </group>
    </group>
  );
}

export default PressRoomNew;
