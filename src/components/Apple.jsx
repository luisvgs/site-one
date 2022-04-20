import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import AppleModel from "../models/apple.glb";
import { useSpring, animated, config } from "@react-spring/three";

const Apple = (props) => {
  const [hovered, setHover] = useState(false);
  const group = useRef();
  const { nodes, materials } = useGLTF(AppleModel);
  const isMobile = window.screen.width <= 617;
  const [active, setActive] = useState(false);
  const { scale } = useSpring({
    scale: active ? 1.1 : 1,
    config: config.stiff,
  });

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    {
      isMobile
        ? (group.current.position.y = group.current.position.y)
        : (group.current.position.y = 0.8 + Math.sin(t / 0.8) / 32);
    }
  });

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
      ref={group}
      castShadow
      receiveShadow
      position={[6.405, 0.75, 2]}
      scale={isMobile ? 1 : scale}
      {...props}
      dispose={null}
    >
      <Html
        position={[1.2, 0.4, -2]}
        distanceFactor={65}
        style={{
          transition: "all 0.3s",
          opacity: hovered ? 1 : 0.5,
          transform: `scale(${hovered ? 1 : 0.0})`,
        }}
      >
        <div class="content">Descripcion del partership con Apple.</div>
      </Html>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve022.geometry}
        material={materials["Material.010"]}
      />
    </animated.mesh>
  );
};

useGLTF.preload("/apple.glb");
export default Apple;
