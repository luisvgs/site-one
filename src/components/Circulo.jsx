import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useSpring, animated, config } from "@react-spring/three";

const Circulo = (props, size) => {
  const { scale } = { ...size };
  const ref = useRef();
  useFrame(() => {
    ref.current.material.opacity =
      0.3 + Math.sin(new Date().getTime() * 0.002) - 0.9;
  });
  return (
    <mesh ref={ref} {...props}>
      <circleBufferGeometry args={[scale, 64]} />
      <meshBasicMaterial color="white" opacity={0.1} transparent />
    </mesh>
  );
};

export default Circulo;
