import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper, SpotLightHelper } from "three";
import { useControls } from "leva";

const SupportLights = () => {
  // const { intensity, topLight } = useControls({
  //   intensity: {
  //     min: 8.0,
  //     max: 13.0,
  //     value: 0.5,
  //     step: 0.1,
  //   },
  //   topIntensity: {
  //     min: 1.9,
  //     max: 13.0,
  //     value: 0.5,
  //     step: 0.1,
  //   },
  // });
  const group = useRef();
  const pointLight = useRef();
  const light = useRef();
  useHelper(light, SpotLightHelper, "lightblue");
  useHelper(pointLight, PointLightHelper, 0.2, "hotpink");
  return (
    <group ref={group}>
      {/* Light from 3rd view */}
      <spotLight
        intensity={0.9}
        castShadow
        angle={0.86}
        decay={0.32}
        color="#ffffff"
        // ref={light}
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
        //random
        // ref={pointLight}
        distance={6}
        intensity={6.003}
        position={[6.405, 0.75, 2]}
        power={63}
      />
      <pointLight
        color={"#f20723"} // Red light from corner
        // ref={pointLight}
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
      />
      <spotLight
        intensity={0.87}
        color={"blue"}
        penumbra={1.0}
        // ref={light}
        position={[-1.111, 0.23, 7.864]}
      />
    </group>
  );
};

export default SupportLights;
