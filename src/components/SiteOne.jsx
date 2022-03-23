import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import SuModel from "../models/SU_technology.glb";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSpring, animated, config } from "@react-spring/three";

const SuComponent = (props) => {
  const group = useRef();
  const [hovered, setHovered] = useState(false)
  const { nodes, material } = useGLTF(SuModel);
  const { wobble } = useSpring({ 
    wobble: hovered ? 2.80 : 2.15,
    config: config.wobbly
  });

  // useFrame((state) => {
  //   group.current.rotation.y += 0.009;
  // }
  // );

  return (
    <animated.mesh
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
      ref={group}
      // scale={[3, 3, 1]}
      scale={wobble}
      position={[3.425, 0.88, 2]}
      {...props}
      dispose={null}
  >
          <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={nodes.Curve.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={nodes.Curve001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={nodes.Curve002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={nodes.Curve003.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={nodes.Curve004.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve005.geometry}
        material={nodes.Curve005.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve006.geometry}
        material={nodes.Curve006.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007.geometry}
        material={nodes.Curve007.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve008.geometry}
        material={nodes.Curve008.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve009.geometry}
        material={nodes.Curve009.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={nodes.Curve010.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve011.geometry}
        material={nodes.Curve011.material}
      />
        {/* <mesh
          name="Curve007"
          castShadow
          receiveShadow
          geometry={nodes.Curve007.geometry}
          material={materials["Material.002"]}
        /> */}
    </animated.mesh>
  );
};

useGLTF.preload("/logo_su.glb");
export default SuComponent;
