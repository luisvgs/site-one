import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import FocosModel from "../models/Focos.glb";

import { state } from "../state";
import { useSnapshot } from "valtio";
const Focos = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(FocosModel);
  const snap = useSnapshot(state);
  return (
    <group ref={group} {...props} dispose={null}>
      {state.hovered === "about" && (
        <group position={[-0.02, 0.38, 0.08]}>
          <pointLight intensity={0.9} decay={2} color="blue" 
          rotation={[-Math.PI / 2, 0, 0]
        }
          />
        </group>
      )}
      {state.hovered === "partners" && (
      <group position={[-0.02, 0.31, 0.08]}>
        <pointLight
          intensity={0.91}
          decay={2}
          color="red"
          rotation={[-Math.PI / 2, 0, 0]
        }
        />
      </group>
      )}
      {/* <group position={[-0.02, 0.24, 0.08]}>
        <pointLight
          intensity={0.41}
          decay={2}
          color="#eeff93"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-0.02, 0.17, 0.08]}>
        <pointLight
          intensity={0.41}
          decay={2}
          color="#8fff89"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-0.02, 0.11, 0.08]}>
        <pointLight
          intensity={0.41}
          decay={2}
          color="#508dff"
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group> */}
    </group>
  );
};

useGLTF.preload("/Focos.glb");
export default Focos;
