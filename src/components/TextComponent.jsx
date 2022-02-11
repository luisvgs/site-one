import { Text } from "@react-three/drei";
const TextComponent = () => {
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
      <Text
        position={[2.73, 1.2, 2]}
        scale={[1, 1, 0]}
        fontSize={0.08}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Lorem ipsum dolor sit amet
      </Text>
      <Text
        position={[2.73, 1.04, 2]}
        scale={[1, 1, 0]}
        fontSize={0.03}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </Text>
    </>
  );
};

export default TextComponent;
