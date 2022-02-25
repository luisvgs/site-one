import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import MicrosoftModel from "../models/microsoft.glb";
import { useFrame } from "@react-three/fiber";
import { useTransition, Transition, animated } from "react-spring";

const Microsoft = (props) => {
  const [hovered, setHover] = useState(false);
  const [show, set] = useState(false);
  const group = useRef();
  const { nodes, materials } = useGLTF(MicrosoftModel);

  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: show,
    delay: 200,
    onRest: () => set(!show),
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = 0.8 + Math.sin(t / 0.9) / 32;
  });

  return (
    <mesh
      onClick={() => set((show) => !show)}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHover(false);
      }}
      position={[6.405, 0.75, 2]}
      scale={[1, 1, 1]}
      ref={group}
      {...props}
      dispose={null}
    >
      {hovered && (
        <Html position={[-0.98, 0.8, -2]} distanceFactor={65}>
          <div class="content">Descripcion del partership con Microsoft.</div>
        </Html>
      )}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve021.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve023.geometry}
        material={materials["Material.005"]}
      />
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
    </mesh>
  );
};

useGLTF.preload("/Microsoft.glb");
export default Microsoft;
