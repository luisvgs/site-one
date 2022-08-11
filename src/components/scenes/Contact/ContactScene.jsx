import React, { useState, useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import ContactHome from "../../../models/ContactHome.glb";
import ContactLights from "./ContactLights";
import { Touch } from "../../Touch";

const ContactScene = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials, animations, scene } = useGLTF(ContactHome);
  const { actions } = useAnimations(animations, group);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    Object.entries(actions).map((animation) => {
      animation[1].play();
    });
  });

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <>
      <group ref={group} scale={[0.2, 0.2, 0.14]} {...props} dispose={null}>
        <Touch position={[1.47, 1.1, -0.87]} scale={0.09} />
        <group name="Scene">
          <group
            name="Master_Control"
            position={[1.47, 1.67, -0.87]}
            rotation={[-0.15, 0.64, 1.07]}
            scale={4.54}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => {
              console.log("Hola");
            }}
          >
            <group name="Empty006" position={[0, 0.47, 0]} scale={0.21}>
              <mesh
                name="Cube011"
                castShadow
                receiveShadow
                geometry={nodes.Cube011.geometry}
                material={materials["Light Blue"]}
                rotation={[Math.PI, -0.05, Math.PI]}
              />
            </group>
            <group name="Empty007" position={[0, 0.64, 0]} scale={0.13}>
              <mesh
                name="Cube012"
                castShadow
                receiveShadow
                geometry={nodes.Cube012.geometry}
                material={materials["Light Blue"]}
                rotation={[Math.PI, -0.05, Math.PI]}
              />
            </group>

            <group name="Empty008" position={[0, 0.27, 0]} scale={0.12}>
              <mesh
                name="Cube013"
                castShadow
                receiveShadow
                geometry={nodes.Cube013.geometry}
                material={materials["Light Blue"]}
                rotation={[Math.PI, -0.05, Math.PI]}
              />
            </group>
            <group name="Empty009" position={[0, 0.36, 0]} scale={0.18}>
              <mesh
                name="Cube014"
                castShadow
                receiveShadow
                geometry={nodes.Cube014.geometry}
                material={materials["Light Blue. Variant 1"]}
                rotation={[0, -0.02, 0]}
              />
            </group>
            <group name="Empty010" position={[0, 0.66, 0]} scale={0.08}>
              <mesh
                name="Cube015"
                castShadow
                receiveShadow
                geometry={nodes.Cube015.geometry}
                material={materials["Light Blue"]}
                rotation={[Math.PI, -0.05, Math.PI]}
              />
            </group>
            <group name="Empty011" position={[0, 0.55, 0]} scale={0.19}>
              <mesh
                name="Cube016"
                castShadow
                receiveShadow
                geometry={nodes.Cube016.geometry}
                material={materials["Light Blue"]}
                rotation={[Math.PI, -0.05, Math.PI]}
              />
            </group>
            <mesh
              name="BezierCircle006"
              castShadow
              receiveShadow
              geometry={nodes.BezierCircle006.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.54, 0]}
              scale={0.45}
            />
            <mesh
              name="BezierCircle007"
              castShadow
              receiveShadow
              geometry={nodes.BezierCircle007.geometry}
              material={materials["Light Blue. Variant 1"]}
              position={[0, 0.44, 0]}
              scale={0.35}
            />
            <mesh
              name="BezierCircle008"
              castShadow
              receiveShadow
              geometry={nodes.BezierCircle008.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.32, 0]}
              scale={0.32}
            />
            <mesh
              name="Guia011"
              castShadow
              receiveShadow
              geometry={nodes.Guia011.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.46, 0]}
              scale={0.22}
            />
            <mesh
              name="Guia012"
              castShadow
              receiveShadow
              geometry={nodes.Guia012.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.46, 0]}
              scale={0.22}
            />
            <mesh
              name="Guia013"
              castShadow
              receiveShadow
              geometry={nodes.Guia013.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.46, 0]}
              scale={0.22}
            />
            <mesh
              name="Guia014"
              castShadow
              receiveShadow
              geometry={nodes.Guia014.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.46, 0]}
              scale={0.22}
            />
            <mesh
              name="Guia015"
              castShadow
              receiveShadow
              geometry={nodes.Guia015.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.46, 0]}
              scale={0.22}
            />
            <mesh
              name="Guia016"
              castShadow
              receiveShadow
              geometry={nodes.Guia016.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.46, 0]}
              scale={0.22}
            />
            <mesh
              name="Guia017"
              castShadow
              receiveShadow
              geometry={nodes.Guia017.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.46, 0]}
              scale={0.22}
            />
            <mesh
              name="Guia018"
              castShadow
              receiveShadow
              geometry={nodes.Guia018.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.46, 0]}
              scale={0.22}
            />
            <mesh
              name="Guia019"
              castShadow
              receiveShadow
              geometry={nodes.Guia019.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.46, 0]}
              scale={0.22}
            />
            <mesh
              name="Sphere004"
              castShadow
              receiveShadow
              geometry={nodes.Sphere004.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.46, 0]}
              scale={0.22}
            />
            <mesh
              name="Sphere005"
              castShadow
              receiveShadow
              geometry={nodes.Sphere005.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.46, 0]}
              scale={0.22}
            />
            <mesh
              name="Sphere006"
              castShadow
              receiveShadow
              geometry={nodes.Sphere006.geometry}
              material={materials["Light Blue"]}
              position={[0, 0.45, 0]}
              scale={0.22}
            />
          </group>
          <mesh
            name="Sphere007"
            castShadow
            receiveShadow
            geometry={nodes.Sphere007.geometry}
            material={materials["Light Blue. Variant 1"]}
            position={[-0.01, 0, 0]}
            scale={0.12}
          />
          <mesh
            name="Sphere009"
            castShadow
            receiveShadow
            geometry={nodes.Sphere009.geometry}
            material={materials["Light Blue"]}
            position={[0.04, 0.01, -0.01]}
            scale={0.11}
          />
          <mesh
            name="Sphere010"
            castShadow
            receiveShadow
            geometry={nodes.Sphere010.geometry}
            material={materials["Light Blue variant 2"]}
            position={[0.01, 0, 0]}
            scale={0.11}
          />
          <mesh
            name="Sphere011"
            castShadow
            receiveShadow
            geometry={nodes.Sphere011.geometry}
            material={materials["Light Blue. Variant 1"]}
            position={[-0.05, 0, 0]}
            scale={0.07}
          />
          <mesh
            name="Sphere"
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={materials["Light Blue variant 2"]}
            position={[-0.07, 0, 0]}
            scale={0.17}
          />
          <mesh
            name="Sphere008"
            castShadow
            receiveShadow
            geometry={nodes.Sphere008.geometry}
            material={materials["Light Blue"]}
            rotation={[0, 0.68, 0]}
            scale={0.14}
          />
          <group
            name="Cube007"
            position={[0.19, 2.33, -0.08]}
            scale={[7.08, 5.6, 5.6]}
          >
            <mesh
              name="Cube007_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube007_1.geometry}
              material={materials["Blue Wall 1"]}
            />
            <mesh
              name="Cube007_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube007_2.geometry}
              material={materials["Blue Wall 2"]}
            />
          </group>
          <mesh
            name="Table"
            castShadow
            receiveShadow
            geometry={nodes.Table.geometry}
            material={materials.Table}
          />
          <group name="Circle" scale={0.67}>
            <mesh
              name="Circle001_1"
              castShadow
              receiveShadow
              geometry={nodes.Circle001_1.geometry}
              material={materials.Metal}
            />
            <mesh
              name="Circle001_2"
              castShadow
              receiveShadow
              geometry={nodes.Circle001_2.geometry}
              material={materials["Light Blue"]}
            />
          </group>
          <mesh
            name="Cube004"
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials["Light Bluev2"]}
            position={[0, 0.15, 0]}
            scale={[0.33, 0.24, 0.33]}
          />
          <group
            name="book_1"
            position={[-3.65, 0.8, -1.77]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.34}
          >
            <mesh
              name="Cube017"
              castShadow
              receiveShadow
              geometry={nodes.Cube017.geometry}
              material={materials["book 2"]}
            />
            <mesh
              name="Cube017_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube017_1.geometry}
              material={materials["book 2D"]}
            />
          </group>
          <group
            name="Book_2"
            position={[-3.27, 0.8, -1.77]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.34}
          >
            <mesh
              name="Cube018"
              castShadow
              receiveShadow
              geometry={nodes.Cube018.geometry}
              material={materials["book 3"]}
            />
            <mesh
              name="Cube018_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube018_1.geometry}
              material={materials["book 3D"]}
            />
          </group>
          <group
            name="Book_3"
            position={[-4.28, 0.88, -1.77]}
            rotation={[Math.PI / 2, -0.34, -Math.PI / 2]}
            scale={0.34}
          >
            <mesh
              name="Cube019"
              castShadow
              receiveShadow
              geometry={nodes.Cube019.geometry}
              material={materials["book 1"]}
            />
            <mesh
              name="Cube019_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube019_1.geometry}
              material={materials["book 1 D"]}
            />
          </group>
          <mesh
            name="Pages_1"
            castShadow
            receiveShadow
            geometry={nodes.Pages_1.geometry}
            material={materials["Material.001"]}
            position={[-3.65, 0.8, -1.77]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.34}
          />
          <mesh
            name="Pages_2"
            castShadow
            receiveShadow
            geometry={nodes.Pages_2.geometry}
            material={materials["Material.001"]}
            position={[-3.33, 0.8, -1.77]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.34}
          />
          <mesh
            name="Pages_3"
            castShadow
            receiveShadow
            geometry={nodes.Pages_3.geometry}
            material={materials["Material.001"]}
            position={[-4.28, 0.88, -1.77]}
            rotation={[Math.PI / 2, -0.34, -Math.PI / 2]}
            scale={0.34}
          />
          <mesh
            name="Circle001"
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={nodes.Circle001.material}
            position={[0.34, 0.02, -0.01]}
            scale={0.36}
          />
          <mesh
            name="Leaf_2"
            castShadow
            receiveShadow
            geometry={nodes.Leaf_2.geometry}
            material={materials["Verde planta "]}
            position={[4.08, 0.56, -1.93]}
            rotation={[-0.32, -1.21, 0.02]}
            scale={0.33}
          >
            <mesh
              name="leaf_1"
              castShadow
              receiveShadow
              geometry={nodes.leaf_1.geometry}
              material={materials["Verde planta "]}
              position={[0.47, -0.25, 0.59]}
              rotation={[1.15, 1.32, -0.48]}
              scale={0.99}
            />
            <mesh
              name="Leaf_3"
              castShadow
              receiveShadow
              geometry={nodes.Leaf_3.geometry}
              material={materials["Verde planta "]}
              position={[0.16, -0.11, -0.61]}
              rotation={[-1.1, -1.17, -0.86]}
              scale={1.15}
            />
            <mesh
              name="Leaf_4"
              castShadow
              receiveShadow
              geometry={nodes.Leaf_4.geometry}
              material={materials["Verde planta "]}
              position={[0.68, -0.3, -0.55]}
              rotation={[-2.38, -0.93, -1.84]}
              scale={0.97}
            />
            <mesh
              name="Leaf_5"
              castShadow
              receiveShadow
              geometry={nodes.Leaf_5.geometry}
              material={materials["Verde planta "]}
              position={[0.99, -0.22, -0.32]}
              rotation={[-2.77, -0.41, -2.1]}
              scale={1.06}
            />
            <mesh
              name="Leaf_6"
              castShadow
              receiveShadow
              geometry={nodes.Leaf_6.geometry}
              material={materials["Verde planta "]}
              position={[0.91, -0.39, 0.51]}
              rotation={[2.99, 0.85, -2.12]}
              scale={0.82}
            />
            <mesh
              name="Leaf_7"
              castShadow
              receiveShadow
              geometry={nodes.Leaf_7.geometry}
              material={materials["Verde planta "]}
              position={[0.63, -0.29, -0.05]}
              rotation={[-3.1, 0.5, -2.53]}
              scale={1.44}
            />
            <mesh
              name="Leaf_8"
              castShadow
              receiveShadow
              geometry={nodes.Leaf_8.geometry}
              material={materials["Verde planta "]}
              position={[1.07, -0.43, 0.08]}
              rotation={[-2.96, -0.05, -2.23]}
              scale={0.82}
            />
            <mesh
              name="Leaf_9"
              castShadow
              receiveShadow
              geometry={nodes.Leaf_9.geometry}
              material={materials["Verde planta "]}
              position={[0.04, -0.15, 0.43]}
              rotation={[0.11, 0.46, 0.15]}
              scale={0.82}
            />
            <mesh
              name="earth_"
              castShadow
              receiveShadow
              geometry={nodes.earth_.geometry}
              material={materials.Tierra}
              position={[0.5, -0.25, -0.03]}
              rotation={[0.58, 0.94, -0.56]}
              scale={1.35}
            />
            <group
              name="Vert005"
              position={[0.08, -1.52, -0.18]}
              rotation={[0.58, 0.94, -0.56]}
              scale={3.44}
            >
              <mesh
                name="Vert005_1"
                castShadow
                receiveShadow
                geometry={nodes.Vert005_1.geometry}
                material={materials["Jarron "]}
              />
              <mesh
                name="Vert005_2"
                castShadow
                receiveShadow
                geometry={nodes.Vert005_2.geometry}
                material={materials["Jarron 2"]}
              />
            </group>
          </mesh>
          <mesh
            name="Circle002"
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={materials.Porcelana}
            position={[2.92, 0.08, -1.71]}
            rotation={[0, -0.75, 0]}
            scale={0.18}
          />
          <mesh
            name="Circle003"
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials.Porcelana}
            position={[2.92, 0.08, -1.71]}
            scale={0.18}
          />
          <mesh
            name="Circle004"
            castShadow
            receiveShadow
            geometry={nodes.Circle004.geometry}
            material={materials["Metal.001"]}
            position={[3.02, 0.14, -1.45]}
            rotation={[3, 1.27, -2.97]}
            scale={0.13}
          />
          <mesh
            name="Circle005"
            castShadow
            receiveShadow
            geometry={nodes.Circle005.geometry}
            material={materials.Cafe}
            position={[2.92, 0.08, -1.71]}
            rotation={[0, -0.75, 0]}
            scale={0.18}
          />
          <group
            name="i_phone_x"
            position={[3.72, 0.06, -1.05]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0}
          >
            <mesh
              name="i_phone_x_1"
              castShadow
              receiveShadow
              geometry={nodes.i_phone_x_1.geometry}
              material={materials["Metal.002"]}
            />
            <mesh
              name="i_phone_x_2"
              castShadow
              receiveShadow
              geometry={nodes.i_phone_x_2.geometry}
              material={materials["Metal.001"]}
            />
          </group>
          <mesh
            name="Cylinder001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials.Material}
            position={[0, 0.51, 0]}
            scale={0.34}
          />
          <mesh
            name="Cube009"
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials["Cuadro vertical"]}
            position={[-3.3, 3.23, -5.62]}
            scale={1.12}
          />
          <mesh
            name="Cube010"
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials["Cuadro Horiz"]}
            position={[3.6, 3.23, -5.62]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.12}
          />
        </group>
        {/* <primitive object={scene} /> */}
      </group>
    </>
  );
};
export default ContactScene;
useGLTF.preload("/Contact Home .glb");
