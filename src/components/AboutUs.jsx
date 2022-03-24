import { Text } from "@react-three/drei";
import React, { useState } from "react";
import SuComponent from "./SiteOne";
import { useSpring, animated, config } from "@react-spring/three";
import { useLocation } from "wouter";

const AboutUs = () => {
  const [location] = useLocation();
  const [flip, set] = useState(false);
  const AnimatedText = animated(Text);

  const opacity_spring = useSpring({
    from: { fillOpacity: 0.1 },
    to: { fillOpacity: 1 },
    reset: false,
    reverse: flip,
    config: config.stiff,
    onRest: () => (flip ? set(false) : !flip),
  });

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
      <AnimatedText
        {...wobble_spring}
        position={[2.73, 1.04, 2]}
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
export default AboutUs;
