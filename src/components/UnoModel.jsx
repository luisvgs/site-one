import React, { useState, useEffect, useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import UnoModel from "../models/Number1C.glb";
import Focos from "./Focos";
import { useSpring, animated } from "@react-spring/three";
import { state } from "../state";
import { useSnapshot } from "valtio";

const UnoComponent = () => {
  useSnapshot(state);
  const group = useRef();
  const { nodes, materials } = useGLTF(UnoModel);
  const [hovered, setHovered] = useState(false);
  const isMobile = window.screen.width <= 617;

  const props = useSpring({
    loop: true,
    from: { position: [0.0, 0.0, 0] },
    to: [{ position: [0.0, 0.2, 0] }, { position: [0.0, 0.0, 0] }],
    config: { duration: "7000" },
    delay: 700,
  });

  const tiny_cube = useSpring({
    loop: true,
    from: { position: [0.0, 0.0, 0] },
    to: [{ position: [0.0, 0.072, 0] }, { position: [0.0, 0.0, 0] }],
    config: { duration: "7000" },
    delay: 200,
  });

  const big_cube = useSpring({
    loop: true,
    from: { position: [0.0, 0.0, 0] },
    to: [{ position: [0.0, -0.09, 0] }, { position: [0.0, 0.0, 0] }],
    config: { duration: "7000" },
    delay: 200,
  });

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <mesh
      position={[0.205, 0.78, 2]}
      ref={group}
      dispose={null}
      scale={[1, 1, 1]}
    >
      <Focos />
      {/* Uno model starts here*/}
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
        onClick={() => (state.clicked = 1)}
        onPointerOver={() => {
          state.hovered = "about";
          setHovered(true);
        }}
        onPointerLeave={() => {
          state.hovered = null;
          setHovered(false);
        }}
        castShadow
        receiveShadow
        geometry={nodes.Curve007.geometry}
        material={materials["Azul google"]}
      >
        <Html
          position={[0.07, 0.43, 0]}
          distanceFactor={20}
          style={{
            transition: "all 0.2s",
            opacity: state.hovered === "about" ? 1 : 0.2,
            transform: `scale(${state.hovered === "about" ? 1 : 0.0})`,
          }}
        >
          <div class="content">About us</div>
        </Html>
      </mesh>
      <mesh
        castShadow
        onClick={() => {
          state.clicked = 2;
        }}
        onPointerOver={() => {
          state.hovered = "partners";
          setHovered(true);
        }}
        onPointerLeave={() => {
          state.hovered = null;
          setHovered(false);
        }}
        receiveShadow
        geometry={nodes.Curve007_1.geometry}
        material={materials["Narajan google"]}
      >
        <Html
          position={[-0.23, 0.35, 0]}
          distanceFactor={20}
          style={{
            transition: "all 0.2s",
            opacity: state.hovered === "partners" ? 1 : 0.2,
            transform: `scale(${state.hovered === "partners" ? 1 : 0.0})`,
          }}
        >
          <div class="content">Partners</div>
        </Html>
      </mesh>
      <mesh
        onClick={() => {
          state.clicked = 3;
        }}
        onPointerOver={() => {
          state.hovered = "portfolio";
          setHovered(true);
        }}
        onPointerLeave={() => {
          state.hovered = null;
          setHovered(false);
        }}
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials["Amarillo google"]}
      >
        <Html
          position={[0.07, 0.28, 0]}
          distanceFactor={20}
          style={{
            transition: "all 0.2s",
            opacity: state.hovered === "portfolio" ? 1 : 0.2,
            transform: `scale(${state.hovered === "portfolio" ? 1 : 0.0})`,
          }}
        >
          <div class="content">Portfolio</div>
        </Html>
      </mesh>
      <mesh
        onClick={() => {
          state.clicked = 4;
        }}
        onPointerOver={() => {
          state.hovered = "news";
          setHovered(true);
        }}
        onPointerLeave={() => {
          state.hovered = null;
          setHovered(false);
        }}
        castShadow
        receiveShadow
        geometry={nodes.Curve007_3.geometry}
        material={materials["Verde google"]}
      >
        <Html
          position={[-0.23, 0.2, 0]}
          distanceFactor={20}
          style={{
            transition: "all 0.2s",
            opacity: state.hovered === "news" ? 1 : 0.2,
            transform: `scale(${state.hovered === "news" ? 1 : 0.0})`,
          }}
        >
          <div class="content">Press room</div>
        </Html>
      </mesh>
      <mesh
        onClick={() => {
          state.clicked = 5;
        }}
        onPointerOver={() => {
          state.hovered = "contact";
          setHovered(true);
        }}
        onPointerLeave={() => {
          state.hovered = null;
          setHovered(false);
        }}
        castShadow
        receiveShadow
        geometry={nodes.Curve007_4.geometry}
        material={materials["Azul oscuro google"]}
      >
        <Html
          position={[0.07, 0.12, 0]}
          distanceFactor={20}
          style={{
            transition: "all 0.2s",
            opacity: state.hovered === "contact" ? 1 : 0.2,
            transform: `scale(${state.hovered === "contact" ? 1 : 0.0})`,
          }}
        >
          <div class="content">Contact</div>
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
      />
      {/* Cilinder 1 */}
      <animated.mesh {...(isMobile ? [0.0, 0.2, 0] : props)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={nodes.Cube019.material}
        />
      </animated.mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={nodes.Curve004.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004_1.geometry}
        material={materials["Luz azul "]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath009.geometry}
        material={nodes.NurbsPath009.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath018.geometry}
        material={nodes.NurbsPath018.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath010.geometry}
        material={nodes.NurbsPath010.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath017.geometry}
        material={nodes.NurbsPath017.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath011.geometry}
        material={nodes.NurbsPath011.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath019.geometry}
        material={nodes.NurbsPath019.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath012.geometry}
        material={nodes.NurbsPath012.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath020.geometry}
        material={nodes.NurbsPath020.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath013.geometry}
        material={nodes.NurbsPath013.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath021.geometry}
        material={nodes.NurbsPath021.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath014.geometry}
        material={nodes.NurbsPath014.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath015.geometry}
        material={nodes.NurbsPath015.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath016.geometry}
        material={nodes.NurbsPath016.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve013.geometry}
        material={nodes.Curve013.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve014.geometry}
        material={nodes.Curve014.material}
      />
      {/* Cube here */}
      <animated.mesh {...(isMobile ? [0.0, -0.09, 0] : big_cube)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={nodes.Cube026.material}
        />
      </animated.mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={nodes.Cube027.material}
      />
      {/* Cube here  */}
      <animated.mesh {...(isMobile ? [0.0, 0.072, 0] : tiny_cube)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={nodes.Cube028.material}
        />
      </animated.mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={nodes.Cube029.material}
      />
      {/* Uno model ends here*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={nodes.Cylinder006.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={nodes.Cylinder007.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={nodes.Cylinder008.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={nodes.Cylinder009.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={nodes.Cylinder010.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={nodes.Cylinder011.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={nodes.Cylinder012.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={nodes.Cylinder013.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={nodes.Cylinder014.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={nodes.Cylinder015.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={nodes.Cylinder016.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={nodes.Cylinder017.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={nodes.Cylinder018.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={nodes.Cylinder019.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={nodes.Cylinder020.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={nodes.Cylinder021.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={nodes.Cylinder022.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={nodes.Cylinder023.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024.geometry}
        material={nodes.Cylinder024.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025.geometry}
        material={nodes.Cylinder025.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026.geometry}
        material={nodes.Cylinder026.material}
      />
    </mesh>
  );
};

useGLTF.preload("/Number1C.glb");
export default UnoComponent;
