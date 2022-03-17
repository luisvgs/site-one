import IphoneLights from "./IphoneLights";
import { Text } from "@react-three/drei";
import Iphone from "./Telefono_optimizado";
import IphoneBase from "./Telefono_base";

const Contact = () => {
  return (
    <>
      <Text
        position={[16.6, 1.29, 2]}
        scale={[1, 1, 1]}
        fontSize={0.06}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Contact
      </Text>
      <IphoneLights position={[16.27, 0.88, 2]} />
      <Iphone position={[16.27, 0.88, 2]} />
      <IphoneBase position={[16.27, 0.88, 2]} />
    </>
  );
};

export default Contact;
