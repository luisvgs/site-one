import { Text } from "@react-three/drei";
import SuComponent from "./SiteOne";
const SecondScene = () => {
  return (
    <>
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
      <SuComponent />
    </>
  );
};
export default SecondScene;
