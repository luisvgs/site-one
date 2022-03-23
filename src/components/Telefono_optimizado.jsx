import React, { useRef, useState, useMemo } from "react";
import { useGLTF, Html } from "@react-three/drei";
import TelefonoOpt from "../models/telefono_optimizado.glb";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";

const Iphone = ({ position, content }) => {
  const group = useRef();
  const { nodes } = useGLTF(TelefonoOpt);
  const {mouse, clock} = useThree();
  const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], [])
  useFrame(() => {
    if (group.current) {
      rEuler.set((-mouse.y * Math.PI) / 48, (mouse.x * Math.PI) / 28, 0)
      group.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.05)
      group.current.time = clock.getElapsedTime() * 5
    }
  })
  return (
    <group position={position} ref={group} dispose={null} scale={[1, 1, 1]}>
      <mesh
        geometry={nodes.Glass_top.geometry}
        material={nodes.Glass_top.material}
        position={[0.013, 0.367, 0.035]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.05}
      >
        {content}
      </mesh>
      <mesh
        geometry={nodes.Screen.geometry}
        material={nodes.Screen.material}
        position={[0.01, 0.37, 0.04]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.17, 0.36, 0.05]}
      ></mesh>
      <group ref={group}>
        <mesh
          geometry={nodes.Titanium_unibody.geometry}
          material={nodes.Titanium_unibody.material}
          position={[0.0126, 0.36682, 0.03467]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.03}
        ></mesh>
      </group>
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
