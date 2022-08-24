import React, { useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import Monitor from "../../../models/MonitorWideTexture.glb";

const MonitorWideTexture = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(Monitor);
  return (
    <group ref={group} scale={[0.2, 0.2, 0.14]} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane011"
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials.Material}
          position={[-1.22, 1.9, -0.48]}
        />
        <mesh
          name="Stand001"
          castShadow
          receiveShadow
          geometry={nodes.Stand001.geometry}
          material={materials["Material.101"]}
          position={[-1.32, 1.29, -0.77]}
        />
        <mesh
          name="pantalla_wide"
          castShadow
          receiveShadow
          geometry={nodes.pantalla_wide.geometry}
          material={materials["pantalla_wide "]}
          position={[-1.25, 1.9, -0.36]}
        >
          <Html
            scale={0.3}
            occlude
            // position={[-2.7, 0.4, -0.98]}
            style={{ background: "transparent" }}
            // zIndexRange={[0.5, 0]} // Z-order range (default=[16777271, 0])
            transform // If true, applies matrix3d transformations (default=false)
          >
            <input
              type="text"
              placeholder="Hola"
              style={{
                background: "transparent",
                border: "none",
                color: "white",
              }}
            />
          </Html>
        </mesh>
      </group>
    </group>
  );
};

export default MonitorWideTexture;
useGLTF.preload("/Monitor Wide (1).glb");
