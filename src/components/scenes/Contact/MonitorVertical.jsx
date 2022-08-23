import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import Monitor from "../../../models/MonitorVertical.glb";
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
          rotation={[1.5, -0.01, 0.25]}
          scale={[0.1, 0.03, 0.06]}
        />
        <mesh
          name="Cube079"
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={materials["Material.055"]}
          position={[3.18, 2.54, 0.02]}
          rotation={[-0.07, -0.32, 1.56]}
          scale={[2, 1.13, 0.02]}
        />
        <mesh
          name="Cube082"
          castShadow
          receiveShadow
          geometry={nodes.Cube082.geometry}
          material={materials["Material.044"]}
          position={[3.38, 2.54, 0.02]}
          rotation={[3.07, 0.37, -1.56]}
          scale={[-2, -0.94, -0.09]}
        />
        <mesh
          name="MY_SCREEN001"
          castShadow
          receiveShadow
          // geometry={nodes.MY_SCREEN001.geometry}
          material={materials["Material.036"]}
          position={[3.15, 2.54, 0.03]}
          rotation={[-0.03, 1.25, 1.53]}
          scale={[2.03, 2.03, 2.13]}
        >
          <Html
            scale={0.08}
            transform
            occlude
            center
            rotation={[1.6, 9.43, 1.57]}
            position={[0, -0.0029, -0.347]}
            style={{
              backgroundColor: "white",
              height: "870px",
              width: "460px",
              overflowY: "auto",
            }}
          >
            <Page />
          </Html>
        </mesh>
        <mesh
          name="Cube092"
          castShadow
          receiveShadow
          geometry={nodes.Cube092.geometry}
          material={materials["Material.006"]}
          position={[3.87, 2.55, 0.13]}
          rotation={[-0.07, -0.32, 1.56]}
          scale={[1.03, 1.19, 0.11]}
        />
        <mesh
          name="Cube093"
          castShadow
          receiveShadow
          geometry={nodes.Cube093.geometry}
          material={materials["Material.007"]}
          position={[3.38, 1.65, -0.07]}
          rotation={[0, -0.36, 0]}
          scale={[0.1, 0.08, 0.18]}
        />
        <mesh
          name="Cube096"
          castShadow
          receiveShadow
          geometry={nodes.Cube096.geometry}
          material={materials["Material.037"]}
          position={[3.44, 0.07, -0.18]}
          rotation={[-Math.PI, 0.36, 0]}
          scale={[-1.19, -0.06, -0.33]}
        />
        <mesh
          name="Cube097"
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={materials["Material.057"]}
          position={[3.37, 0.05, 0]}
          rotation={[0, 1.21, 0]}
          scale={[0.27, 0.03, 0.59]}
        />
        <mesh
          name="bg2001"
          castShadow
          receiveShadow
          geometry={nodes.bg2001.geometry}
          material={materials.bg2}
          position={[3.81, 3.87, -0.01]}
          rotation={[-0.05, 1.19, -1.59]}
          scale={0.69}
        />
      </group>
    </group>
  );
};
export default MonitorVertical;
useGLTF.preload("/Monitor Vertical.glb");
