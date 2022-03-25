import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import GoogleModel from "../models/google.glb";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";

const Google = (props) => {
  const [hovered, setHover] = useState(false);
  const group = useRef();
  const { nodes, materials } = useGLTF(GoogleModel);
  const [active, setActive] = useState(false);
  const { scale } = useSpring({
    scale: active ? 1.1 : 1,
    config: config.wobbly,
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = 0.8 + Math.sin(t + 0.01 / 0.5) / 32;
  });

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <animated.mesh
      onClick={() => setActive(!active)}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHover(false);
      }}
      position={[6.405, 0.75, 2]}
      scale={scale}
      ref={group}
      {...props}
      dispose={null}
    >
      <Html
        position={[1.105, 0.1, -2]}
        distanceFactor={65}
        style={{
          transition: "all 0.3s",
          opacity: hovered ? 1 : 0.5,
          transform: `scale(${hovered ? 1 : 0.0})`,
        }}
      >
        <div class="content">Descripcion del partership con Google.</div>
      </Html>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve015.geometry}
        material={nodes.Curve015.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve016.geometry}
        material={nodes.Curve016.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve017.geometry}
        material={nodes.Curve017.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve018.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve019.geometry}
        material={nodes.Curve019.material}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve020.geometry}
        material={materials["Material.003"]}
      />
    </animated.mesh>
  );
};

useGLTF.preload("/google.glb");
export default Google;
