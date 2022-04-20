import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import PlaystoreModel from "../models/playstore.glb";

const Playstore = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(PlaystoreModel);
  return (
    <group ref={group} rotation={[1.6, 0, 0]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials["Material.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve005.geometry}
        material={nodes.Curve005.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve006.geometry}
        material={nodes.Curve006.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007.geometry}
        material={nodes.Curve007.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve008.geometry}
        material={nodes.Curve008.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve009.geometry}
        material={nodes.Curve009.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve011.geometry}
        material={nodes.Curve011.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve014.geometry}
        material={nodes.Curve014.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve015.geometry}
        material={nodes.Curve015.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve016.geometry}
        material={nodes.Curve016.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve019.geometry}
        material={nodes.Curve019.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve020.geometry}
        material={nodes.Curve020.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve021.geometry}
        material={nodes.Curve021.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve023.geometry}
        material={nodes.Curve023.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve024.geometry}
        material={nodes.Curve024.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve029.geometry}
        material={nodes.Curve029.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve012.geometry}
        material={nodes.Curve012.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve010.geometry}
        material={nodes.Curve010.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve031.geometry}
        material={nodes.Curve031.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve030.geometry}
        material={nodes.Curve030.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve017.geometry}
        material={nodes.Curve017.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve025.geometry}
        material={nodes.Curve025.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve026.geometry}
        material={nodes.Curve026.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve027.geometry}
        material={nodes.Curve027.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve022.geometry}
        material={nodes.Curve022.material}
      />
    </group>
  );
};

export default Playstore;
useGLTF.preload("/GooglePlay.glb");
