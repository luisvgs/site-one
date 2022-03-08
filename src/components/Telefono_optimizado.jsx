import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import TelefonoOpt from "../models/telefono_optimizado.glb";

const Iphone = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(TelefonoOpt);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Glass_top.geometry}
        material={nodes.Glass_top.material}
        position={[0.01, 0.37, 0.03]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.Screen.geometry}
        material={nodes.Screen.material}
        position={[0.01, 0.37, 0.04]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.17, 0.36, 0.05]}
      />
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
