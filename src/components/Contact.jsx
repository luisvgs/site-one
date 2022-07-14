import IphoneLights from "./IphoneLights";
import UnoLights from "./UnoLights";
import { Text } from "@react-three/drei";
import ContactRoom from "./ContactScene";
import { config, useSpring } from "@react-spring/three";
import { useState } from "react";

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  const { wobble } = useSpring({
    wobble: hovered ? 1 : 1.1,
    config: config.wobbly,
  });
  return (
    <>
      <UnoLights position={[16.1, 0.88, 4.1]} />
      <ContactRoom position={[14.9, 0.65, 2]} />
    </>
  );
};

export default Contact;
