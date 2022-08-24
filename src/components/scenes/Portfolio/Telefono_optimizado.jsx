import React, { useRef, useState, useMemo } from "react";
import { useGLTF, Html } from "@react-three/drei";
import TelefonoOpt from "../../../models/telefono_optimizado.glb";
import * as THREE from "three";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import { config, useSpring, animated } from "@react-spring/three";
import Foodish from "../../../assets/food.jpg";
import EasyArrive from "../../../assets/easyarrive.jpg";

const Iphone = ({ position, content, rotate, setRotate }) => {
  const group = useRef();
  const { nodes } = useGLTF(TelefonoOpt);
  const { mouse, clock } = useThree();
  const [rEuler, rQuaternion] = useMemo(
    () => [new THREE.Euler(), new THREE.Quaternion()],
    []
  );
  const [pos, setPosition] = useState(0);
  const foodish = new THREE.TextureLoader().load(Foodish);
  foodish.flipY = false;
  foodish.center = new THREE.Vector2(0.7, 0.5);
  foodish.repeat.set(3, 2);
  const easy = new THREE.TextureLoader().load(EasyArrive);
  easy.flipY = false;
  easy.center = new THREE.Vector2(0.7, 0.5);
  easy.repeat.set(3, 2);

  const portfolio = [foodish, easy];

  useFrame(() => {
    if (group.current) {
      rEuler.set((-mouse.y * Math.PI) / 48, (mouse.x * Math.PI) / 28, 0);
      group.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.05);
      group.current.time = clock.getElapsedTime() * 5;
    }
  });

  const spring = useSpring({
    from: { rotation: [0, 0, 0] },
    to: [{ rotation: [0, -6.3, 0] }, { rotation: [0, -1.32, 0] }],
    config: config.gentle,
    loop: false,
    immediate: true,
    // pause: setRotate(false),
    // onRest: () => setRotate(false),
  });

  return (
    <animated.mesh
      position={position}
      ref={group}
      dispose={null}
      scale={[1, 1, 1]}
    >
      <mesh
        geometry={nodes.Glass_top.geometry}
        position={[0.013, 0.367, 0.035]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.05}
      >
        {content}
        <meshBasicMaterial
          attach="material"
          // onUpdate={() => setRotate(false)}
          map={rotate ? portfolio[0] : portfolio[1]}
        />
      </mesh>
      <mesh
        geometry={nodes.Screen.geometry}
        material={nodes.Screen.material}
        position={[0.01, 0.37, 0.04]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.17, 0.36, 0.05]}
      ></mesh>
      <group ref={group}>
        <mesh
          geometry={nodes.Titanium_unibody.geometry}
          material={nodes.Titanium_unibody.material}
          position={[0.0126, 0.36682, 0.03467]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.03}
        ></mesh>
      </group>
      <mesh
        geometry={nodes.Titanium_unibody001.geometry}
        material={nodes.Titanium_unibody001.material}
        position={[0.01, 0.37, 0.03]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.03}
      />
      <mesh
        geometry={nodes.Titanium_unibody002.geometry}
        material={nodes.Titanium_unibody002.material}
        position={[0.01, 0.37, 0.03]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.03}
      />
    </animated.mesh>
  );
};

useGLTF.preload("/telefono_optimizado.glb");
export default Iphone;
