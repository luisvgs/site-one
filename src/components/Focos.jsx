import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { state } from "../state";
import { useSnapshot } from "valtio";
const Focos = (props) => {
  const group = useRef();
  useSnapshot(state);
  return (
    <group scale={[1, 1, 1]} ref={group} {...props} dispose={null}>
      {state.hovered === "about" && (
        <group position={[-0.02, 0.38, 0.08]}>
          <pointLight
            intensity={0.9}
            decay={3}
            color="blue"
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      )}
      {state.hovered === "partners" && (
        <group position={[-0.02, 0.31, 0.08]}>
          <pointLight
            intensity={0.99}
            decay={3}
            color="red"
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      )}
      {state.hovered === "portfolio" && (
        <group position={[-0.02, 0.24, 0.08]}>
          <pointLight
            intensity={0.98}
            decay={2}
            color="yellow"
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      )}

      {state.hovered === "news" && (
        <group position={[-0.02, 0.17, 0.08]}>
          <pointLight
            intensity={0.91}
            decay={3}
            color="#30D54E"
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      )}
      {state.hovered === "contact" && (
        <group position={[-0.02, 0.11, 0.08]}>
          <pointLight
            intensity={0.98}
            decay={3}
            color="#456CEE"
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      )}
    </group>
  );
};

useGLTF.preload("/Focos.glb");
export default Focos;
