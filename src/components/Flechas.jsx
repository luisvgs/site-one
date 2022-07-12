import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import PressModel from "../models/PressRoom.glb";

const Flechas = ({ setNext, setPrev, rotate, setRotate }) => {
  const { nodes, materials } = useGLTF(PressModel);
  const [hovered, setHovered] = useState(false);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );
  return (
    <>
      <group>
        <mesh
          position={[10.48, 1.25, 2.02]}
          castShadow
          receiveShadow
          geometry={nodes.Move_right_button001.geometry}
          material={materials["Light Blue variant 2.001"]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={0.1}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => {
            setNext();
            setRotate(true);
          }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Move_left_button001.geometry}
          material={materials["Light Blue variant 2.001"]}
          position={[10.09, 1.25, 2.02]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.1}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => {
            setPrev();
            setRotate(true);
          }}
        />
      </group>
    </>
  );
};

export default Flechas;
useGLTF.preload("/Press Room.glb");
