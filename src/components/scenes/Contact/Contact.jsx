import { UnoLights } from "../../Light";
import ContactV3 from "./ContactV3";
import MonitorVertical from "./MonitorVertical";
import MonitorWide from "./MonitorWide";
import Cuarto from "./Cuarto";
import { useState } from "react";

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <UnoLights position={[16.1, 0.88, 4.1]} />
      <MonitorVertical position={[14.9, 0.65, 2]} />
      <MonitorWide position={[14.9, 0.65, 2]} />
      <Cuarto position={[14.9, 0.65, 2]} />
    </>
  );
};

export default Contact;
