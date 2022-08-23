import React, { useEffect, useState, useRef } from "react";
import { useGLTF, Text, Image } from "@react-three/drei";
import PressModel from "../../../models/PressRoom.glb";
import PressModelNew from "../../../models/PressRoomV3.glb";
import Roboto from "../../../fonts/Roboto.ttf";
import { useSpring, animated, config } from "@react-spring/three";
import { Touch } from "../../Touch";

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
  [-5.11, -0.3, 1.3],
  [-2.53, -0.3, 0.3],
  [0.09, -0.3, -0.21],
  [2.84, -0.3, 0.3],
  [5.2, -0.3, 1.4],
];

const ARTICLE_TITLE = [
  [-5, 0.1, 1.19],
  [-2.53, 0.1, 0.3],
  [0.09, 0.1, -0.21],
  [2.84, 0.1, 0.3],
  [5.2, 0.1, 1.4],
];

const IMAGE_TITLE = [
  [-4.99, 1.15, 1.3],
  [-2.5, 1.15, 0.3],
  [0.06, 1.15, -0.21],
  [2.82, 1.15, 0.3],
  [5.1, 1.15, 1.4],
];

const ART_ROTATION = [
  [0, 0.5, 0],
  [0, 0.3, 0],
  [0, 0.0, 0],
  [0, -0.3, 0],
  [0, -0.7, 0],
];

const Article = ({ post, new_model }) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const { scale } = useSpring({
    scale: active ? [1.55, 0.77, 1] : [1.53, 0.77, 1],
    config: config.wobbly,
  });
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );
  return (
    <>
      {post.map((single_post, index) => {
        return (
          <>
            <Image
              scale={[1.5, 1.2, 0]}
              url="https://loremflickr.com/320/240"
              position={IMAGE_TITLE[index]}
              rotation={ART_ROTATION[index]}
            />
            <animated.mesh
              key={index}
              onPointerOver={(e) => {
                e.stopPropagation();
                setActive(true);
                setHovered(true);
              }}
              onPointerOut={() => {
                setActive(false);
                setHovered(false);
              }}
              onClick={() => window.open(single_post.URL, "_blank").focus()}
              castShadow
              receiveShadow
              geometry={new_model.nodes.Article_1.geometry}
              material={new_model.materials.Articulo}
              position={POSITION[index]}
              rotation={ROTATION[index]}
              scale={scale}
            />
            <Text
              position={ARTICLE_TITLE[index]}
              rotation={ART_ROTATION[index]}
              fontSize={0.16}
              color={index % 2 === 0 ? "white" : "#fa2720"}
              anchorX="center"
              anchorY="middle"
              font={Roboto}
            >
              {single_post.title
                .replace("<p>", "")
                .replace("</p>", "")
                .substring(0, 38)}
            </Text>
            <Text
              position={ARTICLE[index]}
              rotation={ART_ROTATION[index]}
              color="white"
              anchorX="center"
              textAlign="justify"
              anchorY="middle"
              font={Roboto}
            >
              {single_post.content
                .replace("<p>", "")
                .replace("</p>", "")
                .slice(0, 34) +
                "\n" +
                single_post.content
                  .replace("<p>", "")
                  .replace("</p>", "")
                  .slice(34, 70) +
                "\n" +
                single_post.content
                  .replace("<p>", "")
                  .replace("</p>", "")
                  .slice(70, 104) +
                "\n" +
                single_post.content
                  .replace("<p>", "")
                  .replace("</p>", "")
                  .slice(104, 137)}
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
  const new_model = useGLTF(PressModelNew);
  const [hovered, setHovered] = useState(false);
  const [post, setPost] = useState([]);
  const [active, setActive] = useState(false);
  const [leftactive, setLeftActive] = useState(false);
  const [position, setPosition] = useState(0);
  const { scale } = useSpring({
    scale: active || leftactive ? 0.95 : 0.81,
    config: config.wobbly,
  });

  const loadData = async () => {
    await fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/nubelula.wordpress.com/posts/"
    )
      .then((request) => request.json())
      .then((blog) => blog.posts)
      .then((single_post) => {
        console.log(single_post);
        setPost(single_post);
        const im = post[4].post_thumbnail.URL;
        console.log(JSON.stringify(im));
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
        <Article nodes={nodes} post={post} new_model={new_model} />
        <animated.mesh
          onPointerOver={() => {
            setHovered(true);
            setLeftActive(true);
          }}
          onPointerOut={() => {
            setLeftActive(false);
            setHovered(false);
          }}
          castShadow
          receiveShadow
          geometry={nodes.Move_left_button001.geometry}
          material={materials["Light Blue variant 2.001"]}
          position={[-1.66, -2.59, 1.71]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={scale}
        />
        <animated.mesh
          onPointerOver={() => {
            setHovered(true);
            setActive(true);
          }}
          onPointerOut={() => {
            setActive(false);
            setHovered(false);
          }}
          castShadow
          receiveShadow
          geometry={nodes.Move_right_button001.geometry}
          material={materials["Light Blue variant 2.001"]}
          position={[1.86, -2.58, 2.1]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={scale}
          onClick={() => {
            const p = post.shift();
            post.push(p);
          }}
        />
        <Touch position={[2.0, -2.3, 2.1]} scale={0.08} />
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
