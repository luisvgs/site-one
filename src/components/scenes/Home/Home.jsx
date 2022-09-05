import UnoComponent from "./UnoModel";
import { Text } from "@react-three/drei";
import { UnoLights } from "../../Light";
import { useSpring, animated } from "@react-spring/three";
import UrbanistBold from "../../../fonts/UrbanistBold.ttf";

const Home = () => {
  const isMobile = window.screen.width <= 617;
  const AnimatedText = animated(Text);
  const spring = useSpring({
    from: { scale: [0, 0, 0] },
    to: { scale: [1, 1, 0] },
    config: {
      friction: 12,
    },
    delay: 700,
  });

  return (
    <>
      <AnimatedText
        {...(isMobile ? [1, 1, 0] : spring)}
        position={[-0.471, 1.2, 2]}
        fontSize={0.08}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
        font={UrbanistBold}
      >
        Lorem ipsum dolor sit amet
      </AnimatedText>
      <UnoLights position={[-0.471, 1.2, 2]} />
      <UnoComponent />
    </>
  );
};

export default Home;
