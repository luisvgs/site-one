import UnoComponent from "./UnoModel";
import { Text } from "@react-three/drei";

const FirstScene = () => {
  return (
    <>
      <Text
        position={[-0.471, 1.2, 2]}
        scale={[1, 1, 0]}
        fontSize={0.08}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Lorem ipsum dolor sit amet
      </Text>
      <UnoComponent />
    </>
  );
};

export default FirstScene;
