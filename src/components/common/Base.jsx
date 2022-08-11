import React from "react";
import { useGLTF } from "@react-three/drei";
import BaseModel from "../../models/partners_base.glb";
import { useSpring, animated } from "@react-spring/three";

const Base = (props) => {
  const { nodes } = useGLTF(BaseModel);
  const spring = useSpring({
    loop: true,
    from: { position: [-0.3, -0.3, -0.41] },
    to: [
      { position: [-0.3, -0.092, -0.41] },
      { position: [-0.3, -0.3, -0.41] },
    ],
    config: { duration: "5000" },
    delay: 200,
  });

  const front_cube = useSpring({
    loop: true,
    from: { position: [-0.16, -0.4, -0.12] },
    to: [
      { position: [-0.16, -0.1, -0.12] },
      { position: [-0.16, -0.4, -0.12] },
    ],
    config: { duration: "8000" },
    delay: 200,
  });

  const tiny_spring = useSpring({
    loop: true,
    from: { position: [0.46, -0.6, -0.41] },
    to: [{ position: [0.46, -0.1, -0.41] }, { position: [0.46, -0.6, -0.41] }],
    config: { duration: "9000" },
    delay: 200,
  });

  return (
    <group
      castShadow
      receiveShadow
      position={[6.405, 0.75, 2]}
      scale={[1, 1, 1]}
      {...props}
      dispose={null}
    >
      <animated.mesh {...spring}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={nodes.Cube031.material}
        />
      </animated.mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={nodes.Cube032.material}
        position={[-0.56, -0.03, -0.21]}
      />{" "}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={nodes.Cube044.material}
        position={[0, -0.18, 0]}
        scale={[0.41, 0.33, 0.14]}
      />
      {/* Apple  */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={nodes.Cube045.material}
        position={[0.83, -0.5, -0.47]}
      />
      {/* Microsoft */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={nodes.Cube046.material}
        position={[-0.64, -0.58, -0.32]}
      />
      {/* Movement bases */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={nodes.Cube047.material}
        position={[0.2, -0.03, -0.21]}
      />
      <animated.mesh {...front_cube}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={nodes.Cube048.material}
        />
      </animated.mesh>
      <animated.mesh {...tiny_spring}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={nodes.Cube049.material}
        />
      </animated.mesh>
    </group>
  );
};

useGLTF.preload("/Base.glb");
export default Base;
