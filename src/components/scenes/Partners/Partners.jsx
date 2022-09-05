import { Text } from "@react-three/drei";
import Google from "./Google";
import Microsoft from "./Microsoft";
import Apple from "./Apple";
import { UnoLights } from "../../Light";
import { Base } from "../../common";
import { config, useSpring, animated } from "@react-spring/three";
import { useState } from "react";
import UrbanistBold from "../../../fonts/UrbanistBold.ttf";

const Partners = () => {
  const isMobile = window.screen.width <= 617;
  const [hovered, setHovered] = useState(false);
  const { wobble } = useSpring({
    wobble: hovered ? 1 : 1.2,
    config: config.wobbly,
  });

  const AnimatedText = animated(Text);
  return (
    <>
      <AnimatedText
        position={[5.85, 1.6, 1.7]}
        scale={isMobile ? 1.2 : wobble}
        fontSize={0.08}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
        font={UrbanistBold}
      >
        Partners
      </AnimatedText>
      <Apple />
      <Google />
      <Microsoft />
      <Base />
      <UnoLights position={[6.571, 1.8, 3.1]} />
    </>
  );
};

export default Partners;
