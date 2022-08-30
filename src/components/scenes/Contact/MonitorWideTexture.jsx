import React, { useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import Monitor from "../../../models/WideMonitor.glb";
import { useSnapshot } from "valtio";
import { state } from "../../../store/state";
import { Touch } from "../../Touch";

const MonitorWideTexture = (props) => {
  useSnapshot(state);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(Monitor);
  return (
    <group
      onDoubleClick={() => (state.zoom = false)}
      onClick={() => (state.zoom = true)}
      ref={group}
      scale={[0.2, 0.2, 0.14]}
      {...props}
      dispose={null}
    >
      {state.zoom ? <> </> : <Touch position={[-4.0, 2.6, 0.3]} scale={0.08} />}
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
          {state.zoom ? (
            <>
              <Html
                scale={0.3}
                position={[-2.6, 0.44, -0.98]}
                style={{
                  background: "transparent",
                }}
                transform
              >
                <input
                  type="text"
                  placeholder="Name"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                  }}
                />
              </Html>
              <Html
                scale={0.3}
                position={[-2.6, -0.18, -0.98]}
                style={{
                  background: "transparent",
                }}
                transform
              >
                <input
                  type="text"
                  placeholder="Phone"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                  }}
                />
              </Html>
              <Html
                scale={0.3}
                position={[-2.6, -0.89, -0.98]}
                rotateX={6}
                style={{
                  background: "transparent",
                }}
                transform
              >
                <input
                  type="text"
                  placeholder="Email"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                  }}
                />
              </Html>
            </>
          ) : (
            ""
          )}
        </mesh>
      </group>
    </group>
  );
};

export default MonitorWideTexture;
useGLTF.preload("/Monitor Wide (1).glb");
