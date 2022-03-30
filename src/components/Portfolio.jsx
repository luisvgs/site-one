import { useState } from "react";
import IphoneLights from "./IphoneLights";
import { Text, Image } from "@react-three/drei";
import Iphone from "./Telefono_optimizado";
import IphoneBase from "./Telefono_base";
import Content from "./Content";
import { useSpring, animated, config } from "react-spring";
import Selector from "./Selector";
import Playstore from "./google-arrow.png";
import AppStore from "./appstore.jpg";

const Description = () => {
  return (
    <>
      <group>
        <Text
          position={[10.67, 1.37, 2]}
          scale={0.3}
          fontSize={0.06}
          color="white"
          maxWidth={0.69}
          anchorX="center"
          anchorY="middle"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt
          placeat recusandae id aperiam voluptatibus minus! Eos temporibus
        </Text>
        <Image
          url={Playstore}
          position={[10.7, 1.2, 2]}
          scale={[0.07, 0.07, 0.07]}
        />
        <Image
          url={AppStore}
          position={[10.6, 1.2, 2]}
          scale={[0.07, 0.07, 0.07]}
        />
      </group>
    </>
  );
};

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
        position={[10.7, 1.5, 2]}
        scale={wobble}
        fontSize={0.06}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Portfolio
      </AnimatedText>
      <Description />
      <Iphone position={[10.27, 0.9, 2]} />
      <IphoneLights position={[10.27, 0.88, 2]} />
      <IphoneBase position={[10.27, 0.88, 2]} />
      <Selector />
    </>
  );
};

export default Portfolio;
