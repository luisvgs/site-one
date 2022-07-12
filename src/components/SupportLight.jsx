import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper, SpotLightHelper } from "three";
// import { useControls } from "leva";

const SupportLights = () => {
  const group = useRef();
  const pointLight = useRef();
  const pointLight2 = useRef();
  const pointLight3 = useRef();
  const pointLight4 = useRef();
  const light = useRef();

  useHelper(light, SpotLightHelper, "lightblue");
  useHelper(pointLight, PointLightHelper, 0.2, "hotpink");
  useHelper(pointLight2, PointLightHelper, 0.2, "hotpink");
  useHelper(pointLight3, PointLightHelper, 0.2, "cyan");

  return (
    <group ref={group}>
      {/* Light from 3rd view */}
      <spotLight
        intensity={0.9}
        castShadow
        angle={0.86}
        decay={0.32}
        color="#ffffff"
        ref={light}
        power={7.596}
        position={[5.965, 0.88, 2.67]}
        penumbra={1.0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight
        ref={pointLight}
        distance={6}
        intensity={6.003}
        color={"#f20723"} // Red light from corner
        position={[6.405, 0.25, 4]}
        power={63}
      />
      <pointLight
        color={"#f20723"} // Red light from corner
        ref={pointLight2}
        distance={6}
        intensity={6.003}
        position={[-0.52, 0.23, 4.703]}
        power={63}
      />
      <pointLight
        // Light from top
        intensity={0.98}
        position={[0.205, 2.62, 1.15]}
        decay={1.27}
        distance={1.0}
        power={91.546}
        ref={pointLight3}
      />
    </group>
  );
};

export default SupportLights;
