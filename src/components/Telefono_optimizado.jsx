import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import TelefonoOpt from "../models/telefono_optimizado.glb";
import Carrusel from "./Carousel";

const Iphone = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(TelefonoOpt);
  const [hidden, set] = useState();
  return (
    <group position={[10.27, 0.88, 2]} dispose={null} scale={[1, 1, 1]}>
      <group className="mesh-group">
        <mesh
          geometry={nodes.Glass_top.geometry}
          material={nodes.Glass_top.material}
          position={[0.01, 0.37, 0.03]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.05}
        >
          <Html
            className="cont"
            rotation={[3.14, 0, 0]}
            position={[-2.7, 0.3, 2]}
            transform
            occlude
            onOcclude={set}
            style={{
              transition: "all 0.3s",
              opacity: hidden ? 0 : 1,
              transform: `scale(${hidden ? 0.1 : 1})`,
            }}
          >
            <div className="wrapper">
              <Carrusel />
            </div>
          </Html>
        </mesh>
      </group>
      <mesh
        geometry={nodes.Screen.geometry}
        material={nodes.Screen.material}
        position={[0.01, 0.37, 0.04]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.17, 0.36, 0.05]}
      ></mesh>
      <mesh
        geometry={nodes.Titanium_unibody.geometry}
        material={nodes.Titanium_unibody.material}
        position={[0.01, 0.37, 0.03]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.03}
      />
      <mesh
        geometry={nodes.Titanium_unibody001.geometry}
        material={nodes.Titanium_unibody001.material}
        position={[0.01, 0.37, 0.03]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.03}
      />
      <mesh
        geometry={nodes.Titanium_unibody002.geometry}
        material={nodes.Titanium_unibody002.material}
        position={[0.01, 0.37, 0.03]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.03}
      />
    </group>
  );
};

useGLTF.preload("/telefono_optimizado.glb");
export default Iphone;
