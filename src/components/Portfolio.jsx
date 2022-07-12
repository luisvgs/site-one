import { useState } from "react";
import IphoneLights from "./IphoneLights";
import { Text, Image } from "@react-three/drei";
import Iphone from "./Telefono_optimizado";
import IphoneBase from "./Telefono_base";
import Flechas from "./Flechas";
import { config, useSpring, animated } from "@react-spring/three";
import { useTransition } from "react-spring";
import AppStore from "./AppStore";
import Playstore from "./Playstore";

const Logos = () => {
  return (
    <>
      <group>
        <AppStore position={[10.6, 1.2, 2]} scale={[0.8, 0.8, 0.8]} />
        <Playstore position={[10.78, 1.194, 2]} scale={[0.8, 0.8, 0.8]} />
      </group>
    </>
  );
};

const images = ["/contemplative-reptile.jpg", "/pasticho.jpg"];
const descriptions = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt placeat recusandae id aperiam voluptatibus minus Eos temporibus",
  "Descripcion 2",
];
const AnimatedImage = animated(Image);
const Portfolio = () => {
  const [rotate, setRotate] = useState(false);
  const [position, setPosition] = useState(0);
  const [hovered, setHovered] = useState(false);

  const setNext = () => setPosition((index) => (index + 1) % images.length);
  const setPrev = () => setPosition((index) => (index - 1) % images.length);

  const AnimatedText = animated(Text);
  const { wobble } = useSpring({
    wobble: hovered ? 1 : 1.1,
    config: config.wobbly,
  });
  const textTransition = useTransition(position, {
    from: { fillOpacity: 0 },
    enter: { fillOpacity: 1 },
    leave: { fillOpacity: 0 },
    config: config.default,
  });

  return (
    <>
      {/* <AnimatedImage */}
      {/*   url={images[position]} */}
      {/*   position={[10.4, 1.6, 2]} */}
      {/*   scale={[0.09, 0.09, 0.09]} */}
      {/* /> */}
      <AnimatedText
        //! TODO fix here
        // onPointerOver={() => setHovered(true)}
        // onPointerOut={() => setHovered(false)}
        position={[10.7, 1.5, 2]}
        scale={wobble}
        fontSize={0.06}
        color="white"
        maxWidth={0.69}
        anchorX="center"
        anchorY="middle"
      >
        Portfolio
      </AnimatedText>

      {textTransition((style, index) => (
        <AnimatedText
          {...style}
          position={[10.68, 1.37, 2]}
          scale={0.3}
          fontSize={0.06}
          color="white"
          maxWidth={0.69}
          anchorX="center"
          anchorY="middle"
        >
          {[descriptions[index]]}
        </AnimatedText>
      ))}
      <Logos />
      <Iphone
        position={[10.27, 0.9, 2]}
        rotate={rotate}
        setRotate={setRotate}
      />
      <IphoneLights position={[10.27, 0.88, 2]} />
      <IphoneBase position={[10.27, 0.88, 2]} />
      <Flechas
        setNext={setNext}
        setPrev={setPrev}
        rotate={rotate}
        setRotate={setRotate}
      />
      {/* <Selector */}
      {/*   setNext={setNext} */}
      {/*   setPrev={setPrev} */}
      {/*   rotate={rotate} */}
      {/*   setRotate={setRotate} */}
      {/* /> */}
    </>
  );
};

export default Portfolio;
