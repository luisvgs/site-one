import PhoneScene from "./PhoneScene";
import { Text } from "@react-three/drei";
import Iphone from "./Telefono_optimizado";
import IphoneBase from "./Telefono_base";

const FourthScene = () => {
  return (
    <>
      <Text
        position={[10.8, 1.28, 2]}
        scale={[1, 1, 1]}
        fontSize={0.08}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Portfolio
      </Text>
      <Iphone />
      <PhoneScene />
      <IphoneBase />
    </>
  );
};

export default FourthScene;
