import { UnoLights } from "../../Light";
import MonitorTexture from "./MonitorTexture";
import MonitorWideTexture from "./MonitorWideTexture";
import Room from "./Room";
import { useState } from "react";

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <UnoLights position={[16.1, 0.88, 4.1]} />
      <MonitorTexture position={[14.9, 0.65, 2]} />
      <MonitorWideTexture position={[14.9, 0.65, 2]} />
      <Room position={[14.9, 0.65, 2]} />
    </>
  );
};

export default Contact;
