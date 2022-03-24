import UnoComponent from "./UnoModel";
import { Text } from "@react-three/drei";
import UnoLights from "./UnoLights";
import {useSpring, animated} from "@react-spring/three";

const Home = () => {
  const AnimatedText = animated(Text);
  const spring = useSpring({
    from: { scale: [0, 0, 0] },
    to: { scale: [1, 1, 0] },
    config: {
      friction: 12,
    },
    // config: config.wobbly,
    delay: 700,
  })

  return (
    <>
      <AnimatedText
      {...spring}
        position={[-0.471, 1.2, 2]}
        fontSize={0.08}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Lorem ipsum dolor sit amet
      </AnimatedText>
      <UnoLights />
      <UnoComponent />
    </>
  );
};

export default Home;
