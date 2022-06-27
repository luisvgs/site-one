import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import Esfera from "../models/Sphere.glb";

const Sphere = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(Esfera);
  const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} scale={[0.1, 0.1, 0.1]} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Master_Control"
          position={[1.47, 1.67, -0.87]}
          rotation={[-0.15, 0.64, 1.07]}
          scale={4.54}
        >
          <group name="Empty006" position={[0, 0.47, 0]} scale={0.21}>
            <mesh
              name="Cube011"
              castShadow
              receiveShadow
              geometry={nodes.Cube011.geometry}
              material={materials["Light Blue"]}
              rotation={[Math.PI, -0.05, Math.PI]}
            />
          </group>
          <group name="Empty007" position={[0, 0.64, 0]} scale={0.13}>
            <mesh
              name="Cube012"
              castShadow
              receiveShadow
              geometry={nodes.Cube012.geometry}
              material={materials["Light Blue"]}
              rotation={[Math.PI, -0.05, Math.PI]}
            />
          </group>
          <group name="Empty008" position={[0, 0.27, 0]} scale={0.12}>
            <mesh
              name="Cube013"
              castShadow
              receiveShadow
              geometry={nodes.Cube013.geometry}
              material={materials["Light Blue"]}
              rotation={[Math.PI, -0.05, Math.PI]}
            />
          </group>
          <group name="Empty009" position={[0, 0.36, 0]} scale={0.18}>
            <mesh
              name="Cube014"
              castShadow
              receiveShadow
              geometry={nodes.Cube014.geometry}
              material={materials["Light Blue. Variant 1"]}
              rotation={[0, -0.02, 0]}
            />
          </group>
          <group name="Empty010" position={[0, 0.66, 0]} scale={0.08}>
            <mesh
              name="Cube015"
              castShadow
              receiveShadow
              geometry={nodes.Cube015.geometry}
              material={materials["Light Blue"]}
              rotation={[Math.PI, -0.05, Math.PI]}
            />
          </group>
          <group name="Empty011" position={[0, 0.55, 0]} scale={0.19}>
            <mesh
              name="Cube016"
              castShadow
              receiveShadow
              geometry={nodes.Cube016.geometry}
              material={materials["Light Blue"]}
              rotation={[Math.PI, -0.05, Math.PI]}
            />
          </group>
          <mesh
            name="BezierCircle006"
            castShadow
            receiveShadow
            geometry={nodes.BezierCircle006.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.54, 0]}
            scale={0.45}
          />
          <mesh
            name="BezierCircle007"
            castShadow
            receiveShadow
            geometry={nodes.BezierCircle007.geometry}
            material={materials["Light Blue. Variant 1"]}
            position={[0, 0.44, 0]}
            scale={0.35}
          />
          <mesh
            name="BezierCircle008"
            castShadow
            receiveShadow
            geometry={nodes.BezierCircle008.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.32, 0]}
            scale={0.32}
          />
          <mesh
            name="Guia011"
            castShadow
            receiveShadow
            geometry={nodes.Guia011.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.46, 0]}
            scale={0.22}
          />
          <mesh
            name="Guia012"
            castShadow
            receiveShadow
            geometry={nodes.Guia012.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.46, 0]}
            scale={0.22}
          />
          <mesh
            name="Guia013"
            castShadow
            receiveShadow
            geometry={nodes.Guia013.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.46, 0]}
            scale={0.22}
          />
          <mesh
            name="Guia014"
            castShadow
            receiveShadow
            geometry={nodes.Guia014.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.46, 0]}
            scale={0.22}
          />
          <mesh
            name="Guia015"
            castShadow
            receiveShadow
            geometry={nodes.Guia015.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.46, 0]}
            scale={0.22}
          />
          <mesh
            name="Guia016"
            castShadow
            receiveShadow
            geometry={nodes.Guia016.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.46, 0]}
            scale={0.22}
          />
          <mesh
            name="Guia017"
            castShadow
            receiveShadow
            geometry={nodes.Guia017.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.46, 0]}
            scale={0.22}
          />
          <mesh
            name="Guia018"
            castShadow
            receiveShadow
            geometry={nodes.Guia018.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.46, 0]}
            scale={0.22}
          />
          <mesh
            name="Guia019"
            castShadow
            receiveShadow
            geometry={nodes.Guia019.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.46, 0]}
            scale={0.22}
          />
          <mesh
            name="Sphere004"
            castShadow
            receiveShadow
            geometry={nodes.Sphere004.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.46, 0]}
            scale={0.22}
          />
          <mesh
            name="Sphere005"
            castShadow
            receiveShadow
            geometry={nodes.Sphere005.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.46, 0]}
            scale={0.22}
          />
          <mesh
            name="Sphere006"
            castShadow
            receiveShadow
            geometry={nodes.Sphere006.geometry}
            material={materials["Light Blue"]}
            position={[0, 0.45, 0]}
            scale={0.22}
          />
        </group>
        <group
          name="Camera"
          position={[0.08, 5.06, 18.14]}
          rotation={[1.4, 0, -0.01]}
        >
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={false}
            far={1000}
            near={0.1}
            fov={22.9}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="Empty" position={[0, 3.42, 3.25]} />
        <mesh
          name="Sphere007"
          castShadow
          receiveShadow
          geometry={nodes.Sphere007.geometry}
          material={materials["Light Blue. Variant 1"]}
          position={[-0.01, 0, 0]}
          scale={0.12}
        />
        <mesh
          name="Sphere009"
          castShadow
          receiveShadow
          geometry={nodes.Sphere009.geometry}
          material={materials["Light Blue"]}
          position={[0.04, 0.01, -0.01]}
          scale={0.11}
        />
        <mesh
          name="Sphere010"
          castShadow
          receiveShadow
          geometry={nodes.Sphere010.geometry}
          material={materials["Light Blue variant 2"]}
          position={[0.01, 0, 0]}
          scale={0.11}
        />
        <mesh
          name="Sphere011"
          castShadow
          receiveShadow
          geometry={nodes.Sphere011.geometry}
          material={materials["Light Blue. Variant 1"]}
          position={[-0.05, 0, 0]}
          scale={0.07}
        />
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Light Blue variant 2"]}
          position={[-0.07, 0, 0]}
          scale={0.17}
        />
        <mesh
          name="Sphere008"
          castShadow
          receiveShadow
          geometry={nodes.Sphere008.geometry}
          material={materials["Light Blue"]}
          rotation={[0, 0.68, 0]}
          scale={0.14}
        />
        <group name="Circle" scale={0.67}>
          <mesh
            name="Circle001"
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={materials.Metal}
          />
          <mesh
            name="Circle001_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials["Light Blue"]}
          />
        </group>
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Light Bluev2"]}
          position={[0, 0.15, 0]}
          scale={[0.33, 0.24, 0.33]}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.Material}
          position={[0, 0.51, 0]}
          scale={0.34}
        />
      </group>
    </group>
  );
};

export default Sphere;
useGLTF.preload("/Sphere.glb");
