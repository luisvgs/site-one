import React, { useEffect, useMemo, useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { config, useSpring, animated } from "@react-spring/three";
import TelefonoOpt from "../../../models/IphoneX.glb";
import Foodish from "../../../assets/food.jpg";
import EasyArrive from "../../../assets/easyarrive.jpg";
import EAR from "../../../assets/ear.jpg";

const IphoneX = ({ position, rotate, setRotate }) => {
  const group = useRef();
  const [current, setPosition] = useState(0);
  const { nodes, materials } = useGLTF(TelefonoOpt);
  const [cancel, setCancel] = useState(false);
  const { mouse, clock } = useThree();
  const [rEuler, rQuaternion] = useMemo(
    () => [new THREE.Euler(), new THREE.Quaternion()],
    []
  );

  const foodish = new THREE.TextureLoader().load(Foodish);
  foodish.flipY = false;
  foodish.center = new THREE.Vector2(0.1, 0.4);
  foodish.repeat.set(3, 2.0);
  const easy = new THREE.TextureLoader().load(EasyArrive);
  easy.flipY = false;
  easy.center = new THREE.Vector2(0.1, 0.4);
  easy.repeat.set(3, 2.0);
  const ear = new THREE.TextureLoader().load(EAR);
  ear.flipY = false;
  ear.center = new THREE.Vector2(0.1, 0.4);
  ear.repeat.set(3, 2.0);

  const portfolio = [easy, foodish, ear];

  useFrame(() => {
    if (group.current) {
      rEuler.set((-mouse.y * Math.PI) / 48, (mouse.x * Math.PI) / 28, 0);
      group.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.05);
      group.current.time = clock.getElapsedTime() * 5;
    }
  });

  const spring = useSpring({
    to: [{ rotation: [0, 6.3, 0] }],
    config: config.slow,
    // Wtf?
    loop: false,
  });

  useEffect(() => {
    setPosition((pos) => (pos + 1) % portfolio.length);
  }, [rotate, portfolio.length]);

  return (
    <animated.mesh
      position={position}
      ref={group}
      dispose={null}
      scale={[1, 1, 1]}
      {...spring}
    >
      <group
        position={[0.01, 0.38, 0]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.4}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Frame2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.Mic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_3.geometry}
          material={materials.Port}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_4.geometry}
          material={materials.Antenna}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple_Logo.geometry}
          material={materials.Logo}
        />
        <mesh castShadow receiveShadow geometry={nodes.Body001.geometry}>
          <meshBasicMaterial
            attach="material"
            map={portfolio[current]}
            needsUpdate
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Button.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.Mic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_2.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_3.geometry}
          material={materials["Camera Frame.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Camera003.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials.Frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Mic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials.Bezel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_3.geometry}
          material={materials["Camera Glass"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_4.geometry}
          material={materials.Lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_5.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.Port}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials["Camera Glass"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials.Lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_4.geometry}
          material={materials["Camera Frame"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_5.geometry}
          material={materials["Black Glass"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_6.geometry}
          material={materials["Gray Glass"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_7.geometry}
          material={materials.Flash}
        />
      </group>
    </animated.mesh>
  );
};

export default IphoneX;
