import React, { useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import MonitorModel from "../../../models/MonitorWide.glb";

const MonitorWide = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(MonitorModel);

  return (
    <group ref={group} scale={[0.2, 0.2, 0.14]} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cubo" position={[-1.41, 3.52, -0.27]}>
          <mesh
            name="Cubo_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cubo_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo_2.geometry}
            material={materials["Material.036"]}
          />
        </group>
        <group name="Plane007" position={[-1.29, 2.16, -0.24]}>
          <mesh
            name="Plane007_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plane007_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_2.geometry}
            material={materials["Material.036"]}
          />
          <mesh
            name="Plane007_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_3.geometry}
            material={materials["Material.091"]}
          />
        </group>
        <mesh
          name="Stand"
          castShadow
          receiveShadow
          geometry={nodes.Stand.geometry}
          material={materials["Material.101"]}
          position={[-1.47, 1.45, -0.75]}
        />
        <group name="Plane010" position={[-1.37, 2.12, -0.13]}>
          <mesh
            name="Plane010_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane010_1.geometry}
            material={materials.Material}
          />
          // Pantalla
          <mesh
            name="Plane010_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane010_2.geometry}
            material={materials["Material.036"]}
          >
            {/* <Html */}
            {/*   scale={0.08} */}
            {/*   transform */}
            {/*   occlude */}
            {/*   center */}
            {/*   rotation={[0, 0.16, 0]} */}
            {/*   // position={[0, -0.0029, -0.347]} */}
            {/*   style={{ */}
            {/*     backgroundColor: "#00008B", */}
            {/*     height: "1090px", */}
            {/*     width: "3200px", */}
            {/*     overflowY: "auto", */}
            {/*   }} */}
            {/* > */}
            {/*   <h1> Hola</h1> */}
            {/* </Html> */}
          </mesh>
        </group>
      </group>
    </group>
  );
};
export default MonitorWide;
useGLTF.preload("/Monitor Wide.glb");
