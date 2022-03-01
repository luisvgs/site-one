import * as THREE from "three";
import React, { useRef, useMemo, useEffect } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { BloomPass } from "three/examples/jsm/postprocessing/BloomPass";
import { useControls } from "leva";

extend({ EffectComposer, BloomPass, ShaderPass, RenderPass, UnrealBloomPass });

const Effects = () => {
  const { strength, radius, threshold } = useControls({
    strength: { value: 0.1, min: 0, max: 3.0, step: 0.1 },
    radius: { value: 0.1, min: 0.0, max: 1.0, step: 0.1 },
    threshold: { value: 0.066, min: 0.0, max: 1.0, step: 0.002 },
  });
  const composer = useRef();
  const { scene, gl, size, camera } = useThree();
  const aspect = useMemo(() => new THREE.Vector2(512, 512), []);
  useEffect(
    () => void composer.current.setSize(size.width, size.height),
    [size]
  );
  useFrame(() => composer.current.render(), 1);
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      {/* constructor( resolution, strength, radius, threshold ) { */}
      <unrealBloomPass
        attachArray="passes"
        args={[aspect, strength, radius, threshold]}
      />
    </effectComposer>
  );
};
export default Effects;
