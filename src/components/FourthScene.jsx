import PhoneScene from "./PhoneScene";
import { Text } from "@react-three/drei";
const FourthScene = () => {
  return (
    <>
      <Text
        position={[10.80, 1.28, 2]}
        scale={[1, 1, 1]}
        fontSize={0.08}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Portfolio
      </Text>
      <PhoneScene />
    </>
  );
};

export default FourthScene;
