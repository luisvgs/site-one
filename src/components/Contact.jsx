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
      {/* <IphoneLights position={[16.27, 0.88, 4.9]} /> */}
      <UnoLights position={[20.07, 0.88, 4.4]} />
      <ContactRoom position={[19.68, 0.65, 2]} />
    </>
  );
};

export default Contact;
