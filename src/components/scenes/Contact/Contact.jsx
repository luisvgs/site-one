import { UnoLights } from "../../Light";
import ContactV2 from "./ContactV2";
import { useState } from "react";

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <UnoLights position={[16.1, 0.88, 4.1]} />
      <ContactV2 position={[14.9, 0.65, 2]} />
    </>
  );
};

export default Contact;
