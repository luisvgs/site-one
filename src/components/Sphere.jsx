import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import Esfera from "../models/Sphere.glb";

const Sphere = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials, animations, scene } = useGLTF(Esfera);
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    actions[names[0]].play();
    actions["BezierCircle.006Action.001"].play();
    actions["BezierCircle.007Action.001"].play();
    actions["BezierCircle.008Action"].play();
    actions["Cube.011Action"].play();
    actions["Cube.013Action"].play();
    actions["Cube.016Action"].play();
    actions["Empty.006Action"].play();
    actions["Empty.007Action"].play();
    actions["Empty.008Action"].play();
    actions["Empty.009Action"].play();
    actions["Empty.010Action"].play();
    actions["Empty.011Action"].play();
  });

  return (
    <group ref={group} scale={[0.1, 0.1, 0.1]} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default Sphere;
useGLTF.preload("/Sphere.glb");
