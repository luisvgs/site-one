import IphoneLights from "./IphoneLights";
import { Text } from "@react-three/drei";
import IphoneContact from "./Telefono_contact";
import IphoneBase from "./Telefono_base";
import { config, useSpring, animated } from "@react-spring/three";
import { useState } from "react";

const Contact = () => {
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
        position={[16.6, 1.29, 2]}
        scale={wobble}
        fontSize={0.06}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Contact
      </AnimatedText>
      <IphoneLights position={[16.27, 0.88, 2]} />
      <IphoneContact position={[16.27, 0.88, 2]} />
      <IphoneBase position={[16.27, 0.88, 2]} />
    </>
  );
};

export default Contact;
