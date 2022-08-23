import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import CuartoModel from "../../../models/Cuarto.glb";

const Cuarto = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(CuartoModel);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} scale={[0.2, 0.2, 0.14]} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Cube007"
          position={[0.19, 2.33, -0.08]}
          scale={[7.08, 5.6, 5.6]}
        >
          <mesh
            name="Cube007_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube007_1.geometry}
            material={materials["Blue Wall 1"]}
          />
          <mesh
            name="Cube007_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube007_2.geometry}
            material={materials["Blue Wall 2"]}
          />
        </group>
        <mesh
          name="Table"
          castShadow
          receiveShadow
          geometry={nodes.Table.geometry}
          material={materials.Table}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials["Cuadro Horiz"]}
          rotation={[0, 0, Math.PI / 2]}
          scale={1.12}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Cuadro vertical"]}
          scale={1.12}
        />
      </group>
    </group>
  );
};

export default Cuarto;
useGLTF.preload("/Cuarto .glb");
