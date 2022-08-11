import { Text, Line } from "@react-three/drei";
import React, { useState } from "react";
import SuComponent from "./SiteOne";
import { useSpring, animated, config } from "@react-spring/three";

const About = () => {
  const [flip, set] = useState(false);
  const AnimatedText = animated(Text);
  const isMobile = window.screen.width <= 617;
  const wobble_spring = useSpring({
    from: { scale: [0.7, 0.7, 0] },
    to: { scale: [1, 1, 0] },
    reset: false,
    reverse: flip,
    config: config.slow,
    onRest: () => (flip ? set(false) : !flip),
  });

  return (
    <>
      <Text
        position={[2.73, 1.2, 2]}
        fontSize={0.08}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Lorem ipsum dolor sit amet
      </Text>
      <Line
        position={[2.39, 1.104, 2]}
        linewidth={1}
        color={"white"}
        points={[
          [0, 0, 0],
          [0.62, 0, 0],
        ]}
      />
      <AnimatedText
        {...(isMobile ? [1, 1, 0] : wobble_spring)}
        position={[2.73, 1.02, 2]}
        fontSize={0.03}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </AnimatedText>
      <SuComponent onClick={() => set(true)} />
    </>
  );
};
export default About;
