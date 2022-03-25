import { Text } from "@react-three/drei";
import Google from "./Google";
import Microsoft from "./Microsoft";
import Apple from "./Apple";
import Base from "./Base";
import { config, useSpring, animated } from "@react-spring/three";
import { useState } from "react";

const Partners = () => {
  const [hovered, setHovered] = useState(false);
  const { wobble } = useSpring({
    wobble: hovered ? 1 : 1.2,
    config: config.wobbly,
  });

  const AnimatedText = animated(Text);
  return (
    <>
      <AnimatedText
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[5.85, 1.6, 1.7]}
        scale={wobble}
        fontSize={0.08}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Partners
      </AnimatedText>
      <Apple />
      <Google />
      <Microsoft />
      <Base />
    </>
  );
};

export default Partners;
