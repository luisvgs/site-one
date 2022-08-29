import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import Monitor from "../../../models/VerticalMonitor.glb";
import Page from "./Page";

const MonitorVertical = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(Monitor);

  return (
    <group ref={group} scale={[0.2, 0.2, 0.14]} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube071"
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={materials["Material.089"]}
          position={[3.77, 2.08, 0.08]}
        />
        <mesh
          name="Cube079"
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={materials["Material.055"]}
          position={[3.08, 2.54, 0]}
        />
        <mesh
          name="Cube082"
          castShadow
          receiveShadow
          geometry={nodes.Cube082.geometry}
          material={materials["Material.044"]}
          position={[3.28, 2.34, -0.04]}
        />
        <mesh
          name="Cube092"
          castShadow
          receiveShadow
          geometry={nodes.Cube092.geometry}
          material={materials["Material.006"]}
          position={[3.22, 2.55, -0.09]}
        />
        <mesh
          name="Cube093"
          castShadow
          receiveShadow
          geometry={nodes.Cube093.geometry}
          material={materials["Material.007"]}
          position={[3.38, 1.65, -0.07]}
        />
        <mesh
          name="Cube095"
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={materials["Material.043"]}
          position={[3.43, 1.27, -0.25]}
        />
        <mesh
          name="Cube096"
          castShadow
          receiveShadow
          geometry={nodes.Cube096.geometry}
          material={materials["Material.037"]}
          position={[3.49, 0.07, -0.49]}
        />
        <mesh
          name="Cube097"
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={materials["Material.057"]}
          position={[3.25, 0.05, -0.04]}
        />
        <mesh
          name="bg2001"
          castShadow
          receiveShadow
          geometry={nodes.bg2001.geometry}
          material={materials.bg2}
          position={[3.81, 3.87, -0.01]}
        />
        <mesh
          name="MY_SCREEN001"
          castShadow
          receiveShadow
          geometry={nodes.MY_SCREEN001.geometry}
          material={materials.pantalla_horizontal}
          position={[3.15, 2.54, 0.03]}
        />
      </group>
    </group>
  );
};
export default MonitorVertical;
useGLTF.preload("/Monitor Vertical.glb");
