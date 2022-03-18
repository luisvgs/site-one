import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import Focos from "../models/Focos.glb";

const UnoLights = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(Focos);
  return (
    <group ref={group} {...props} position={[-0.471, 1.2, 2]} dispose={null}>
      <group position={[-0.8, -0.01, -0.01]}>
        <pointLight
          intensity={15}
          decay={2}
          color="#ff1624"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[0.57, 0.52, -0.07]}>
        <pointLight
          intensity={20}
          decay={2}
          color="#0477ff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-0.34, 0.52, 0.34]}>
        <pointLight
          intensity={14}
          decay={2}
          color="#0c20ff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-0.16, 0.85, -0.08]} scale={0.55}>
        <pointLight intensity={10} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-0.94, 0.52, 0.34]}>
        <pointLight
          intensity={14}
          decay={2}
          color="#0c20ff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-1.03, 0.32, 3.16]} rotation={[1.55, -0.01, 0.27]}>
        <PerspectiveCamera
          makeDefault={false}
          far={1000}
          near={0.1}
          fov={22.9}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-1.03, 0.32, 3.16]} rotation={[1.55, -0.01, 0.27]}>
        <PerspectiveCamera
          makeDefault={false}
          far={1000}
          near={0.1}
          fov={22.9}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/Focos.glb");
export default UnoLights;
