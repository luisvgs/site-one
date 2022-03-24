import IphoneLights from "./IphoneLights";
import { Text } from "@react-three/drei";
import Iphone from "./Telefono_optimizado";
import IphoneBase from "./Telefono_base";
import Content from "./Content";

const Portfolio = () => {
  return (
    <>
      <Text
        position={[10.6, 1.41, 2]}
        scale={[1, 1, 1]}
        fontSize={0.06}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Portfolio
      </Text>
      {/* <Iphone position={[10.27, 0.90, 2]} content={<Content />} /> */}
      <IphoneLights position={[10.27, 0.88, 2]} />
      <IphoneBase position={[10.27, 0.88, 2]} />
    </>
  );
};

export default Portfolio;
