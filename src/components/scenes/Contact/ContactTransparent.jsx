import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import Contact from "../models/Contact.glb";

const ContactTransparent = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(Contact);
  return (
    <group ref={group} scale={[0.08, 0.08, 0.08]} {...props} dispose={null}>
      <group position={[0.08, 5.06, 18.14]} rotation={[1.4, 0, -0.01]}>
        <PerspectiveCamera
          makeDefault={false}
          far={1000}
          near={0.1}
          fov={22.9}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Marco "]}
        position={[-0.12, 3.38, 3.29]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Marco "]}
        position={[0.5, 5.03, 3.28]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.07, 0.02, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Marco "]}
        position={[0.7, 5.03, 3.28]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.06, 0.02, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Marco "]}
        position={[0.88, 5.03, 3.28]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.05, 0.01, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Marco "]}
        position={[1.07, 5.03, 3.28]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.04, 0.01, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Marco "]}
        position={[1.26, 5.03, 3.28]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Marco "]}
        position={[1.45, 5.03, 3.28]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials["Marco "]}
        position={[1.64, 5.03, 3.28]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.02, 0.01, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["Marco "]}
        position={[-3.07, 5.03, 3.28]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.05, 0.01, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Marco "]}
        position={[-0.19, 3.33, 3.29]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["Marco "]}
        position={[-1.98, 1.69, 3.28]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.03, 0.01, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Marco "]}
        position={[-0.12, 3.38, 3.29]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.002"]}
        position={[-0.12, 3.38, 3.27]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.82}
      />
    </group>
  );
};

export default ContactTransparent;
useGLTF.preload("/Contact.glb");
