import { Text } from "@react-three/drei";
import Google from "./Google";
import Microsoft from "./Microsoft";
import Apple from "./Apple";
import Base from "./Base";

const Partners = () => {
  return (
    <>
      <Text
        position={[5.85, 1.6, 1.7]}
        scale={[1, 1, 0]}
        fontSize={0.08}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Partners
      </Text>
      <Apple />
      <Google />
      <Microsoft />
      <Base />
    </>
  );
};

export default Partners;
