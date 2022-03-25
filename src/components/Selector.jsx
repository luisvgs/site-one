import { useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";

const Selector = () => {
  const [hovered, setHovered] = useState(false);
  const { props } = useSpring({
    wobble: hovered ? 0.03 : 0.02,
    config: config.wobbly,
  });

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <>
      <mesh
        scale={[0.03, 0.03, 0.03]}
        position={[10.47, 1.3, 2]}
        rotation={[3, 3, -Math.PI / 5]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <tetrahedronBufferGeometry />
        <meshStandardMaterial metalness={1} roughness={0.8} color="#cc66dd" />
      </mesh>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[10.07, 1.3, 2]}
        rotation={[3, 3, -Math.PI / 4]}
        scale={[0.03, 0.03, 0.03]}
      >
        <tetrahedronBufferGeometry />
        <meshStandardMaterial metalness={1} roughness={0.8} color="#cc66dd" />
      </mesh>
    </>
  );
};
export default Selector;
