import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import MicrosoftModel from "../models/microsoft.glb";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";
import Circulo from "./Circulo";

const Microsoft = (props) => {
  const [hovered, setHover] = useState(false);
  const group = useRef();
  const { nodes, materials } = useGLTF(MicrosoftModel);
  const isMobile = window.screen.width <= 617;
  const [active, setActive] = useState(false);
  const { scale } = useSpring({
    scale: active ? 1.1 : 1,
    config: config.gentle,
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    {
      isMobile
        ? (group.current.position.y = group.current.position.y)
        : (group.current.position.y = 0.8 + Math.sin(t / 0.9) / 32);
    }
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
      scale={isMobile ? 1 : scale}
      ref={group}
      {...props}
      dispose={null}
    >
      <Html
        position={[-0.9, 0.8, -3]}
        distanceFactor={80}
        style={{
          transition: "all 0.3s",
          opacity: hovered ? 1 : 0.5,
          transform: `scale(${hovered ? 1 : 0.0})`,
        }}
      >
        <div class="content">Descripcion del partership con Microsoft.</div>
      </Html>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve021.geometry}
        material={materials["Material.004"]}
      />
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve023.geometry}
          material={materials["Material.005"]}
        />
        <Circulo position={[-0.89, 0.48, -0.42]} scale={0.02} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve024.geometry}
        material={nodes.Curve024.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve025.geometry}
        material={nodes.Curve025.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve026.geometry}
        material={nodes.Curve026.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve027.geometry}
        material={nodes.Curve027.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve029.geometry}
        material={nodes.Curve029.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve031.geometry}
        material={nodes.Curve031.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve032.geometry}
        material={nodes.Curve032.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve034.geometry}
        material={nodes.Curve034.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve036.geometry}
        material={materials["Material.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve037.geometry}
        material={materials["Material.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={nodes.Curve001.material}
      />
    </animated.mesh>
  );
};

useGLTF.preload("/Microsoft.glb");
export default Microsoft;
