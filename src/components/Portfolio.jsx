import { useState } from "react";
import IphoneLights from "./IphoneLights";
import { Text } from "@react-three/drei";
import Iphone from "./Telefono_optimizado";
import IphoneBase from "./Telefono_base";
// import Content from "./Content";
import { useSpring, animated, config } from "react-spring";
import Selector from "./Selector";

const Portfolio = () => {
  const [hovered, setHovered] = useState(false);
  const AnimatedText = animated(Text);
  const { wobble } = useSpring({
    wobble: hovered ? 1 : 1.1,
    config: config.wobbly,
  });

  return (
    <>
      <AnimatedText
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[10.6, 1.41, 2]}
        scale={wobble}
        fontSize={0.06}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Portfolio
      </AnimatedText>
      <Iphone position={[10.27, 0.9, 2]} />
      <IphoneLights position={[10.27, 0.88, 2]} />
      <IphoneBase position={[10.27, 0.88, 2]} />
      <Selector />
    </>
  );
};

export default Portfolio;
