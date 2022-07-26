import React, { useEffect, useState, useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";
import PressModel from "../models/PressRoom.glb";

const POSITION = [
  [-5.11, 0.5, 1.13],
  [-2.53, 0.51, 0.05],
  [0.09, 0.51, -0.32],
  [2.94, 0.51, 0.08],
  [5.39, 0.51, 1.12],
];

const ROTATION = [
  [0, -Math.PI / 3, -Math.PI / 2],
  [0, -1.31, -Math.PI / 2],
  [Math.PI / 2, -Math.PI / 2, 0],
  [Math.PI, -1.31, Math.PI / 2],
  [Math.PI, -Math.PI / 3, Math.PI / 2],
];

const ARTICLE = [
  [-5.11, 0.5, 1.3],
  [-2.53, 0.51, 0.3],
  [0.09, 0.51, -0.21],
  [2.84, 0.51, 0.3],
  [5.2, 0.51, 1.4],
];

const ART_ROTATION = [
  [0, 0.5, 0],
  [0, 0.3, 0],
  [0, 0.0, 0],
  [0, -0.3, 0],
  [0, -0.7, 0],
];

const Article = ({ nodes, post }) => {
  const { materials } = useGLTF(PressModel);
  return (
    <>
      {post.map((single_post, index) => {
        return (
          <>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Article_1.geometry}
              material={materials["Material.017"]}
              position={POSITION[index]}
              rotation={ROTATION[index]}
              scale={[1.53, 0.77, 1]}
            />
            <Text
              position={ARTICLE[index]}
              rotation={ART_ROTATION[index]}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              {single_post.content
                .replace("<p>", "")
                .replace("</p>", "")
                .substring(0, 38)}
            </Text>
          </>
        );
      })}
    </>
  );
};

const PressRoomComponent = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(PressModel);
  const [hovered, setHovered] = useState(false);
  const [post, setPost] = useState([]);

  const loadData = async () => {
    await fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/nubelula.wordpress.com/posts/"
    )
      .then((request) => request.json())
      .then((blog) => blog.posts)
      .then((single_post) => {
        setPost(single_post);
        console.log(single_post);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <>
      <group ref={group} scale={[0.2, 0.2, 0.2]} {...props} dispose={null}>
        <Article nodes={nodes} post={post} />
        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          castShadow
          receiveShadow
          geometry={nodes.Move_left_button001.geometry}
          material={materials["Light Blue variant 2.001"]}
          position={[-1.66, -2.59, 1.71]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={0.81}
          onClick={() => {
            console.log("Left button");
          }}
        />
        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          castShadow
          receiveShadow
          geometry={nodes.Move_right_button001.geometry}
          material={materials["Light Blue variant 2.001"]}
          position={[1.86, -2.58, 2.1]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={0.81}
          onClick={() => {
            console.log("Right button");
          }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Year_display_.geometry}
          material={materials["Light Blue. Variant 1.001"]}
          position={[-1.28, -1.83, 2.22]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.58}
        />
        <group position={[0.09, -3.25, 2.24]} scale={0.67}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={materials["Metal.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials["Light Blue.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Light Bluev2.001"]}
          position={[0.09, -3.1, 2.24]}
          scale={[0.33, 0.24, 0.33]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials["Haz de luz"]}
          position={[0.09, -2.73, 2.24]}
          scale={0.34}
        />
        <group position={[-1.84, -1.62, 1.85]} scale={4.57}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane024.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane024_1.geometry}
            material={materials["Material.017"]}
          />
        </group>
      </group>
    </>
  );
};

export default PressRoomComponent;
useGLTF.preload("/Press Room.glb");
