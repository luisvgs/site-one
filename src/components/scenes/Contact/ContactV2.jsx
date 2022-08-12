import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import ContactHome from "../../../models/Contactv2.glb";

const ContactV2 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(ContactHome);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} scale={[0.2, 0.2, 0.14]} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Point"
          position={[0.21, 7.49, 1.02]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="OnTheFly-bg_422"
          position={[0.28, 0.11, 1.32]}
          rotation={[0.08, 0, 0]}
          scale={0.13}
        >
          <mesh
            name="Object_782"
            castShadow
            receiveShadow
            geometry={nodes.Object_782.geometry}
            material={materials["OnTheFly-bg"]}
          />
        </group>
        <group
          name="Plane003_425"
          position={[-0.43, 0.15, 1.67]}
          rotation={[0, 1.57, 0]}
          scale={0.12}
        >
          <mesh
            name="Object_788"
            castShadow
            receiveShadow
            geometry={nodes.Object_788.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Plane008_430"
          position={[-0.42, 0.19, 1.44]}
          rotation={[0, 1.57, 0.16]}
          scale={0.12}
        >
          <mesh
            name="Object_798"
            castShadow
            receiveShadow
            geometry={nodes.Object_798.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Plane087_431"
          position={[-1.7, 0.13, 1.86]}
          rotation={[0, 1.57, -0.09]}
          scale={0.05}
        >
          <mesh
            name="Object_800"
            castShadow
            receiveShadow
            geometry={nodes.Object_800.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group
          name="Plane088_432"
          position={[-1.69, 0.13, 1.86]}
          rotation={[0, 1.57, -0.09]}
          scale={0.05}
        >
          <mesh
            name="Object_802"
            castShadow
            receiveShadow
            geometry={nodes.Object_802.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group
          name="Plane089_433"
          position={[-1.69, 0.13, 1.87]}
          rotation={[0, 1.57, -0.09]}
          scale={0.05}
        >
          <mesh
            name="Object_804"
            castShadow
            receiveShadow
            geometry={nodes.Object_804.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group
          name="Plane090_434"
          position={[-1.7, 0.13, 1.87]}
          rotation={[0, 1.57, -0.09]}
          scale={0.05}
        >
          <mesh
            name="Object_806"
            castShadow
            receiveShadow
            geometry={nodes.Object_806.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group name="Text_435" position={[-1.71, 0.17, 1.55]} scale={0.04}>
          <mesh
            name="Object_808"
            castShadow
            receiveShadow
            geometry={nodes.Object_808.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group name="Text001_436" position={[-1.61, 0.17, 1.55]} scale={0.04}>
          <mesh
            name="Object_810"
            castShadow
            receiveShadow
            geometry={nodes.Object_810.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group name="Text002_437" position={[-1.48, 0.17, 1.55]} scale={0.04}>
          <mesh
            name="Object_812"
            castShadow
            receiveShadow
            geometry={nodes.Object_812.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group name="Text003_438" position={[-1.38, 0.17, 1.55]} scale={0.04}>
          <mesh
            name="Object_814"
            castShadow
            receiveShadow
            geometry={nodes.Object_814.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group name="Text004_439" position={[-1.28, 0.17, 1.55]} scale={0.04}>
          <mesh
            name="Object_816"
            castShadow
            receiveShadow
            geometry={nodes.Object_816.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group name="Text005_440" position={[-1.17, 0.17, 1.55]} scale={0.04}>
          <mesh
            name="Object_818"
            castShadow
            receiveShadow
            geometry={nodes.Object_818.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group name="Text006_441" position={[-1.06, 0.17, 1.55]} scale={0.04}>
          <mesh
            name="Object_820"
            castShadow
            receiveShadow
            geometry={nodes.Object_820.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group name="Text007_442" position={[-0.94, 0.17, 1.55]} scale={0.04}>
          <mesh
            name="Object_822"
            castShadow
            receiveShadow
            geometry={nodes.Object_822.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group name="Text008_443" position={[-0.85, 0.17, 1.56]} scale={0.04}>
          <mesh
            name="Object_824"
            castShadow
            receiveShadow
            geometry={nodes.Object_824.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group name="Text009_444" position={[-0.73, 0.17, 1.56]} scale={0.04}>
          <mesh
            name="Object_826"
            castShadow
            receiveShadow
            geometry={nodes.Object_826.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group name="Text010_445" position={[-1.67, 0.16, 1.66]} scale={0.04}>
          <mesh
            name="Object_828"
            castShadow
            receiveShadow
            geometry={nodes.Object_828.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group name="Text011_446" position={[-1.56, 0.16, 1.66]} scale={0.04}>
          <mesh
            name="Object_830"
            castShadow
            receiveShadow
            geometry={nodes.Object_830.geometry}
            material={materials["Material.073"]}
          />
        </group>
        <group name="Text012_447" position={[-1.46, 0.16, 1.66]} scale={0.04}>
          <mesh
            name="Object_832"
            castShadow
            receiveShadow
            geometry={nodes.Object_832.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group name="Text013_448" position={[-1.35, 0.16, 1.66]} scale={0.04}>
          <mesh
            name="Object_834"
            castShadow
            receiveShadow
            geometry={nodes.Object_834.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group name="Text014_449" position={[-1.25, 0.15, 1.66]} scale={0.04}>
          <mesh
            name="Object_836"
            castShadow
            receiveShadow
            geometry={nodes.Object_836.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group
          name="Text015_450"
          position={[-1.86, 0.16, 1.65]}
          rotation={[0, 0, -0.02]}
          scale={0.02}
        >
          <mesh
            name="Object_838"
            castShadow
            receiveShadow
            geometry={nodes.Object_838.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text017_452"
          position={[-1.87, 0.14, 1.87]}
          rotation={[-0.12, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_840"
            castShadow
            receiveShadow
            geometry={nodes.Object_840.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group name="Text020_455" position={[-1.14, 0.16, 1.66]} scale={0.04}>
          <mesh
            name="Object_842"
            castShadow
            receiveShadow
            geometry={nodes.Object_842.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text021_456"
          position={[-1.02, 0.16, 1.65]}
          scale={[0.04, 0.04, 0.03]}
        >
          <mesh
            name="Object_844"
            castShadow
            receiveShadow
            geometry={nodes.Object_844.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group name="Text022_457" position={[-0.93, 0.16, 1.66]} scale={0.04}>
          <mesh
            name="Object_846"
            castShadow
            receiveShadow
            geometry={nodes.Object_846.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group name="Text023_458" position={[-0.81, 0.16, 1.67]} scale={0.04}>
          <mesh
            name="Object_848"
            castShadow
            receiveShadow
            geometry={nodes.Object_848.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group
          name="Text025_460"
          position={[-1.87, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_850"
            castShadow
            receiveShadow
            geometry={nodes.Object_850.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text026_461"
          position={[-1.19, 0.15, 1.77]}
          rotation={[-0.1, 0, 0]}
          scale={0.04}
        >
          <mesh
            name="Object_852"
            castShadow
            receiveShadow
            geometry={nodes.Object_852.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text027_462"
          position={[-1.3, 0.15, 1.76]}
          rotation={[-0.1, 0, 0]}
          scale={0.04}
        >
          <mesh
            name="Object_854"
            castShadow
            receiveShadow
            geometry={nodes.Object_854.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group
          name="Text028_463"
          position={[-1.4, 0.15, 1.76]}
          rotation={[-0.1, 0, 0]}
          scale={0.04}
        >
          <mesh
            name="Object_856"
            castShadow
            receiveShadow
            geometry={nodes.Object_856.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group
          name="Text029_464"
          position={[-1.51, 0.15, 1.76]}
          rotation={[-0.1, 0, 0]}
          scale={0.04}
        >
          <mesh
            name="Object_858"
            castShadow
            receiveShadow
            geometry={nodes.Object_858.geometry}
            material={materials["Material.073"]}
          />
        </group>
        <group
          name="Text030_465"
          position={[-1.62, 0.15, 1.76]}
          rotation={[-0.1, 0, 0]}
          scale={0.04}
        >
          <mesh
            name="Object_860"
            castShadow
            receiveShadow
            geometry={nodes.Object_860.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group
          name="Text031_466"
          position={[-1.09, 0.15, 1.77]}
          rotation={[-0.1, 0, 0]}
          scale={0.04}
        >
          <mesh
            name="Object_862"
            castShadow
            receiveShadow
            geometry={nodes.Object_862.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text032_467"
          position={[-0.98, 0.15, 1.77]}
          rotation={[-0.1, 0, 0]}
          scale={0.04}
        >
          <mesh
            name="Object_864"
            castShadow
            receiveShadow
            geometry={nodes.Object_864.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text038_473"
          position={[-1.77, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_866"
            castShadow
            receiveShadow
            geometry={nodes.Object_866.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text039_474"
          position={[-1.66, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_868"
            castShadow
            receiveShadow
            geometry={nodes.Object_868.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group
          name="Text040_475"
          position={[-1.66, 0.18, 1.47]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_870"
            castShadow
            receiveShadow
            geometry={nodes.Object_870.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group
          name="Text053_488"
          position={[-0.43, 0.14, 1.87]}
          rotation={[-0.12, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_872"
            castShadow
            receiveShadow
            geometry={nodes.Object_872.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group name="Text055_490" position={[-0.45, 0.15, 1.65]} scale={0.02}>
          <mesh
            name="Object_874"
            castShadow
            receiveShadow
            geometry={nodes.Object_874.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text057_492"
          position={[-1.55, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_876"
            castShadow
            receiveShadow
            geometry={nodes.Object_876.geometry}
            material={materials["Material.073"]}
          />
        </group>
        <group
          name="Text058_493"
          position={[-1.55, 0.18, 1.47]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_878"
            castShadow
            receiveShadow
            geometry={nodes.Object_878.geometry}
            material={materials["Material.073"]}
          />
        </group>
        <group
          name="Text059_494"
          position={[-1.44, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_880"
            castShadow
            receiveShadow
            geometry={nodes.Object_880.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group
          name="Text060_495"
          position={[-1.44, 0.18, 1.47]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_882"
            castShadow
            receiveShadow
            geometry={nodes.Object_882.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group
          name="Text061_496"
          position={[-1.87, 0.2, 1.31]}
          rotation={[0.14, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_884"
            castShadow
            receiveShadow
            geometry={nodes.Object_884.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text062_497"
          position={[-1.34, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_886"
            castShadow
            receiveShadow
            geometry={nodes.Object_886.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group
          name="Text063_498"
          position={[-1.34, 0.18, 1.47]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_888"
            castShadow
            receiveShadow
            geometry={nodes.Object_888.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group
          name="Text070_505"
          position={[-1.19, 0.2, 1.31]}
          rotation={[0.15, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_890"
            castShadow
            receiveShadow
            geometry={nodes.Object_890.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text071_506"
          position={[-1.37, 0.21, 1.31]}
          rotation={[0.11, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_892"
            castShadow
            receiveShadow
            geometry={nodes.Object_892.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group
          name="Text072_507"
          position={[-1.47, 0.21, 1.31]}
          rotation={[0.11, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_894"
            castShadow
            receiveShadow
            geometry={nodes.Object_894.geometry}
            material={materials["Material.073"]}
          />
        </group>
        <group
          name="Text073_508"
          position={[-1.58, 0.21, 1.31]}
          rotation={[0.11, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_896"
            castShadow
            receiveShadow
            geometry={nodes.Object_896.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group
          name="Text074_509"
          position={[-1.69, 0.21, 1.31]}
          rotation={[0.11, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_898"
            castShadow
            receiveShadow
            geometry={nodes.Object_898.geometry}
            material={materials["Material.067"]}
          />
        </group>
        <group
          name="Text079_514"
          position={[-1.08, 0.2, 1.31]}
          rotation={[0.15, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_900"
            castShadow
            receiveShadow
            geometry={nodes.Object_900.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text080_515"
          position={[-0.98, 0.2, 1.31]}
          rotation={[0.15, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_902"
            castShadow
            receiveShadow
            geometry={nodes.Object_902.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text081_516"
          position={[-0.87, 0.2, 1.31]}
          rotation={[0.15, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_904"
            castShadow
            receiveShadow
            geometry={nodes.Object_904.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text082_517"
          position={[-0.69, 0.2, 1.31]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_906"
            castShadow
            receiveShadow
            geometry={nodes.Object_906.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group
          name="Text083_518"
          position={[-0.59, 0.2, 1.31]}
          rotation={[0.2, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_908"
            castShadow
            receiveShadow
            geometry={nodes.Object_908.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text084_519"
          position={[-0.48, 0.2, 1.31]}
          rotation={[0.2, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_910"
            castShadow
            receiveShadow
            geometry={nodes.Object_910.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text085_520"
          position={[-0.37, 0.2, 1.31]}
          rotation={[0.2, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_912"
            castShadow
            receiveShadow
            geometry={nodes.Object_912.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text086_521"
          position={[-1.24, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_914"
            castShadow
            receiveShadow
            geometry={nodes.Object_914.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group
          name="Text087_522"
          position={[-1.24, 0.18, 1.47]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_916"
            castShadow
            receiveShadow
            geometry={nodes.Object_916.geometry}
            material={materials["Material.072"]}
          />
        </group>
        <group
          name="Text088_523"
          position={[-1.13, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_918"
            castShadow
            receiveShadow
            geometry={nodes.Object_918.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text089_524"
          position={[-1.12, 0.18, 1.47]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_920"
            castShadow
            receiveShadow
            geometry={nodes.Object_920.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text090_525"
          position={[-1.02, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_922"
            castShadow
            receiveShadow
            geometry={nodes.Object_922.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text091_526"
          position={[-1.02, 0.18, 1.47]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_924"
            castShadow
            receiveShadow
            geometry={nodes.Object_924.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text092_527"
          position={[-0.91, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_926"
            castShadow
            receiveShadow
            geometry={nodes.Object_926.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text093_528"
          position={[-0.79, 0.19, 1.43]}
          rotation={[-2.98, 0, 3.14]}
          scale={0.02}
        >
          <mesh
            name="Object_928"
            castShadow
            receiveShadow
            geometry={nodes.Object_928.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group
          name="Text094_529"
          position={[-0.91, 0.18, 1.47]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_930"
            castShadow
            receiveShadow
            geometry={nodes.Object_930.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text095_530"
          position={[-0.81, 0.18, 1.47]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_932"
            castShadow
            receiveShadow
            geometry={nodes.Object_932.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group name="Text099_534" position={[0.43, 0.14, 1.83]} scale={0.02}>
          <mesh
            name="Object_934"
            castShadow
            receiveShadow
            geometry={nodes.Object_934.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text135_570"
          position={[-1.81, 0.15, 1.75]}
          rotation={[-1.62, -1.5, -1.62]}
          scale={[0.04, 0.04, 0.05]}
        >
          <mesh
            name="Object_936"
            castShadow
            receiveShadow
            geometry={nodes.Object_936.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text136_571"
          position={[-0.67, 0.15, 1.76]}
          rotation={[-0.08, 0, 0]}
          scale={[0.04, 0.02, 0.03]}
        >
          <mesh
            name="Object_938"
            castShadow
            receiveShadow
            geometry={nodes.Object_938.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group
          name="Text137_572"
          position={[-0.89, 0.15, 1.76]}
          rotation={[-0.08, 0, 0]}
          scale={[0.03, 0.02, 0.03]}
        >
          <mesh
            name="Object_940"
            castShadow
            receiveShadow
            geometry={nodes.Object_940.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group
          name="Text138_573"
          position={[-1.81, 0.15, 1.77]}
          rotation={[-0.07, 0, 0]}
          scale={[0.01, 0.04, 0.04]}
        >
          <mesh
            name="Object_942"
            castShadow
            receiveShadow
            geometry={nodes.Object_942.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text139_574"
          position={[-0.78, 0.15, 1.76]}
          rotation={[-0.08, 0, 0]}
          scale={[0.03, 0.02, 0.03]}
        >
          <mesh
            name="Object_944"
            castShadow
            receiveShadow
            geometry={nodes.Object_944.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group name="Text140_575" position={[0.23, 0.19, 1.47]} scale={0.03}>
          <mesh
            name="Object_946"
            castShadow
            receiveShadow
            geometry={nodes.Object_946.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text141_576"
          position={[0.12, 0.19, 1.44]}
          rotation={[0.21, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_948"
            castShadow
            receiveShadow
            geometry={nodes.Object_948.geometry}
            material={materials["Material.071"]}
          />
        </group>
        <group
          name="Text142_577"
          position={[0.18, 0.14, 1.87]}
          rotation={[-0.07, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_950"
            castShadow
            receiveShadow
            geometry={nodes.Object_950.geometry}
            material={materials["Material.071"]}
          />
        </group>
        <group
          name="Text143_578"
          position={[0.18, 0.14, 1.9]}
          rotation={[-0.07, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_952"
            castShadow
            receiveShadow
            geometry={nodes.Object_952.geometry}
            material={materials["Material.071"]}
          />
        </group>
        <group
          name="Text144_579"
          position={[-1.91, 0.06, 1.82]}
          rotation={[0, 1.57, 0.09]}
          scale={[0.03, 0.03, 0.02]}
        >
          <mesh
            name="Object_954"
            castShadow
            receiveShadow
            geometry={nodes.Object_954.geometry}
            material={materials["Material.110"]}
          />
        </group>
        <group
          name="Text145_580"
          position={[0.52, 0.07, 1.7]}
          rotation={[3.14, -1.57, 3.05]}
          scale={0.02}
        >
          <mesh
            name="Object_956"
            castShadow
            receiveShadow
            geometry={nodes.Object_956.geometry}
            material={materials["Material.110"]}
          />
        </group>
        <group
          name="Text146_581"
          position={[-1.22, 0.14, 1.85]}
          rotation={[-0.07, 0, 0]}
          scale={[0.03, 0.07, 0.1]}
        >
          <mesh
            name="Object_958"
            castShadow
            receiveShadow
            geometry={nodes.Object_958.geometry}
            material={materials["Material.070"]}
          />
        </group>
        <group
          name="Text147_582"
          position={[0.14, 0.17, 1.55]}
          rotation={[0.08, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_960"
            castShadow
            receiveShadow
            geometry={nodes.Object_960.geometry}
            material={materials["Material.071"]}
          />
        </group>
        <group
          name="Text148_583"
          position={[0.12, 0.17, 1.58]}
          rotation={[0.08, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_962"
            castShadow
            receiveShadow
            geometry={nodes.Object_962.geometry}
            material={materials["Material.071"]}
          />
        </group>
        <group
          name="Text149_584"
          position={[0.34, 0.17, 1.58]}
          rotation={[0.08, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_964"
            castShadow
            receiveShadow
            geometry={nodes.Object_964.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text150_585"
          position={[-0.73, 0.16, 1.65]}
          rotation={[-0.08, 0, 0]}
          scale={[0.04, 0.02, 0.03]}
        >
          <mesh
            name="Object_966"
            castShadow
            receiveShadow
            geometry={nodes.Object_966.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group
          name="Text151_586"
          position={[-0.62, 0.16, 1.67]}
          rotation={[-0.04, 0, 0]}
          scale={[0.04, 0.02, 0.03]}
        >
          <mesh
            name="Object_968"
            castShadow
            receiveShadow
            geometry={nodes.Object_968.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group
          name="Text152_587"
          position={[0.24, 0.17, 1.55]}
          rotation={[0.08, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_970"
            castShadow
            receiveShadow
            geometry={nodes.Object_970.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text153_588"
          position={[-0.42, 0.15, 1.66]}
          scale={[0.02, 0.03, 0.01]}
        >
          <mesh
            name="Object_972"
            castShadow
            receiveShadow
            geometry={nodes.Object_972.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group name="Text154_589" position={[-0.43, 0.15, 1.66]} scale={0.03}>
          <mesh
            name="Object_974"
            castShadow
            receiveShadow
            geometry={nodes.Object_974.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group name="Text155_590" position={[-1.85, 0.17, 1.54]} scale={0.03}>
          <mesh
            name="Object_976"
            castShadow
            receiveShadow
            geometry={nodes.Object_976.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text156_591"
          position={[0.35, 0.17, 1.55]}
          rotation={[0.08, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_978"
            castShadow
            receiveShadow
            geometry={nodes.Object_978.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text157_592"
          position={[0.24, 0.17, 1.58]}
          rotation={[1.6, -1.49, 1.6]}
          scale={[0.02, 0.02, 0.03]}
        >
          <mesh
            name="Object_980"
            castShadow
            receiveShadow
            geometry={nodes.Object_980.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text158_593"
          position={[-0.23, 0.2, 1.31]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_982"
            castShadow
            receiveShadow
            geometry={nodes.Object_982.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text159_594"
          position={[-0.13, 0.2, 1.31]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_984"
            castShadow
            receiveShadow
            geometry={nodes.Object_984.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text160_595"
          position={[-0.02, 0.2, 1.31]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_986"
            castShadow
            receiveShadow
            geometry={nodes.Object_986.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text161_596"
          position={[0.13, 0.16, 1.66]}
          rotation={[-0.04, 0, 0]}
          scale={[0.03, 0.02, 0.03]}
        >
          <mesh
            name="Object_988"
            castShadow
            receiveShadow
            geometry={nodes.Object_988.geometry}
            material={materials["Material.071"]}
          />
        </group>
        <group
          name="Text162_597"
          position={[0.14, 0.16, 1.69]}
          rotation={[-0.04, 0, 0]}
          scale={[0.02, 0.02, 0.03]}
        >
          <mesh
            name="Object_990"
            castShadow
            receiveShadow
            geometry={nodes.Object_990.geometry}
            material={materials["Material.071"]}
          />
        </group>
        <group
          name="Text163_598"
          position={[0.24, 0.16, 1.66]}
          rotation={[-0.04, 0, 0]}
          scale={[0.03, 0.02, 0.03]}
        >
          <mesh
            name="Object_992"
            castShadow
            receiveShadow
            geometry={nodes.Object_992.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text164_599"
          position={[0.35, 0.16, 1.66]}
          rotation={[-0.04, 0, 0]}
          scale={[0.03, 0.02, 0.03]}
        >
          <mesh
            name="Object_994"
            castShadow
            receiveShadow
            geometry={nodes.Object_994.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text165_600"
          position={[0.35, 0.16, 1.69]}
          rotation={[-0.04, 0, 0]}
          scale={[0.02, 0.02, 0.03]}
        >
          <mesh
            name="Object_996"
            castShadow
            receiveShadow
            geometry={nodes.Object_996.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text166_601"
          position={[0.33, 0.14, 1.87]}
          rotation={[-0.07, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_998"
            castShadow
            receiveShadow
            geometry={nodes.Object_998.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group name="Text167_602" position={[-1.86, 0.17, 1.55]} scale={0.02}>
          <mesh
            name="Object_1000"
            castShadow
            receiveShadow
            geometry={nodes.Object_1000.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text168_603"
          position={[-1.81, 0.17, 1.56]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.03}
        >
          <mesh
            name="Object_1002"
            castShadow
            receiveShadow
            geometry={nodes.Object_1002.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text169_604"
          position={[-1.81, 0.17, 1.55]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.02}
        >
          <mesh
            name="Object_1004"
            castShadow
            receiveShadow
            geometry={nodes.Object_1004.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text170_605"
          position={[-0.69, 0.14, 1.87]}
          rotation={[-0.07, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1006"
            castShadow
            receiveShadow
            geometry={nodes.Object_1006.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text171_606"
          position={[-0.54, 0.14, 1.87]}
          rotation={[-0.07, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1008"
            castShadow
            receiveShadow
            geometry={nodes.Object_1008.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text172_607"
          position={[-0.81, 0.14, 1.87]}
          rotation={[-0.07, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1010"
            castShadow
            receiveShadow
            geometry={nodes.Object_1010.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group
          name="Text173_608"
          position={[-1.79, 0.15, 1.77]}
          rotation={[-0.07, 0, 0]}
          scale={[0.01, 0.04, 0.04]}
        >
          <mesh
            name="Object_1012"
            castShadow
            receiveShadow
            geometry={nodes.Object_1012.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text174_609"
          position={[-1.81, 0.15, 1.78]}
          rotation={[-1.54, 1.5, 1.54]}
          scale={[0.02, 0.04, 0.06]}
        >
          <mesh
            name="Object_1014"
            castShadow
            receiveShadow
            geometry={nodes.Object_1014.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text175_610"
          position={[-1.79, 0.15, 1.78]}
          rotation={[-1.54, 1.5, 1.54]}
          scale={[0.02, 0.04, 0.06]}
        >
          <mesh
            name="Object_1016"
            castShadow
            receiveShadow
            geometry={nodes.Object_1016.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text176_611"
          position={[-1.8, 0.15, 1.77]}
          rotation={[-0.07, 0, 0]}
          scale={[0.02, 0.04, 0.04]}
        >
          <mesh
            name="Object_1018"
            castShadow
            receiveShadow
            geometry={nodes.Object_1018.geometry}
            material={materials["Material.108"]}
          />
        </group>
        <group
          name="Text177_612"
          position={[-0.47, 0.15, 1.75]}
          rotation={[1.97, -1.56, 1.97]}
          scale={[0.04, 0.04, 0.07]}
        >
          <mesh
            name="Object_1020"
            castShadow
            receiveShadow
            geometry={nodes.Object_1020.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text178_613"
          position={[-0.46, 0.15, 1.77]}
          rotation={[-0.07, 0, 0]}
          scale={[0.01, 0.04, 0.04]}
        >
          <mesh
            name="Object_1022"
            castShadow
            receiveShadow
            geometry={nodes.Object_1022.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text179_614"
          position={[-0.44, 0.15, 1.77]}
          rotation={[-0.07, 0, 0]}
          scale={[0.01, 0.04, 0.04]}
        >
          <mesh
            name="Object_1024"
            castShadow
            receiveShadow
            geometry={nodes.Object_1024.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text180_615"
          position={[-0.46, 0.15, 1.78]}
          rotation={[-1.54, 1.5, 1.54]}
          scale={[0.01, 0.04, 0.07]}
        >
          <mesh
            name="Object_1026"
            castShadow
            receiveShadow
            geometry={nodes.Object_1026.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text181_616"
          position={[-0.45, 0.15, 1.78]}
          rotation={[-1.54, 1.5, 1.54]}
          scale={[0.01, 0.04, 0.07]}
        >
          <mesh
            name="Object_1028"
            castShadow
            receiveShadow
            geometry={nodes.Object_1028.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text182_617"
          position={[-0.45, 0.15, 1.78]}
          rotation={[-0.07, 0, 0]}
          scale={[0.03, 0.04, 0.04]}
        >
          <mesh
            name="Object_1030"
            castShadow
            receiveShadow
            geometry={nodes.Object_1030.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text183_618"
          position={[-0.42, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_1032"
            castShadow
            receiveShadow
            geometry={nodes.Object_1032.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text184_619"
          position={[-0.23, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1034"
            castShadow
            receiveShadow
            geometry={nodes.Object_1034.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text185_620"
          position={[-0.13, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1036"
            castShadow
            receiveShadow
            geometry={nodes.Object_1036.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text186_621"
          position={[-0.02, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1038"
            castShadow
            receiveShadow
            geometry={nodes.Object_1038.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group name="Text187_622" position={[0.44, 0.16, 1.63]} scale={0.03}>
          <mesh
            name="Object_1040"
            castShadow
            receiveShadow
            geometry={nodes.Object_1040.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group name="Text188_623" position={[0.44, 0.19, 1.45]} scale={0.03}>
          <mesh
            name="Object_1042"
            castShadow
            receiveShadow
            geometry={nodes.Object_1042.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text189_624"
          position={[-0.24, 0.17, 1.55]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1044"
            castShadow
            receiveShadow
            geometry={nodes.Object_1044.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text190_625"
          position={[-0.12, 0.17, 1.55]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1046"
            castShadow
            receiveShadow
            geometry={nodes.Object_1046.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text191_626"
          position={[-0.02, 0.17, 1.55]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1048"
            castShadow
            receiveShadow
            geometry={nodes.Object_1048.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group name="Text192_627" position={[0.33, 0.19, 1.47]} scale={0.03}>
          <mesh
            name="Object_1050"
            castShadow
            receiveShadow
            geometry={nodes.Object_1050.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text193_628"
          position={[-0.43, 0.17, 1.54]}
          rotation={[0.16, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1052"
            castShadow
            receiveShadow
            geometry={nodes.Object_1052.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text194_629"
          position={[-0.54, 0.17, 1.54]}
          rotation={[0.04, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1054"
            castShadow
            receiveShadow
            geometry={nodes.Object_1054.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text195_630"
          position={[-0.65, 0.17, 1.54]}
          rotation={[0.04, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1056"
            castShadow
            receiveShadow
            geometry={nodes.Object_1056.geometry}
            material={materials["Material.111"]}
          />
        </group>
        <group
          name="Text196_631"
          position={[-0.6, 0.19, 1.44]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_1058"
            castShadow
            receiveShadow
            geometry={nodes.Object_1058.geometry}
            material={materials["Material.068"]}
          />
        </group>
        <group
          name="Text197_632"
          position={[-0.7, 0.19, 1.42]}
          rotation={[0.16, 0, 0]}
          scale={0.03}
        >
          <mesh
            name="Object_1060"
            castShadow
            receiveShadow
            geometry={nodes.Object_1060.geometry}
            material={materials["Material.069"]}
          />
        </group>
        <group
          name="Text198_633"
          position={[0.24, 0.15, 1.79]}
          rotation={[1.56, -1.49, 1.6]}
          scale={[0.02, 0.02, 0.03]}
        >
          <mesh
            name="Object_1062"
            castShadow
            receiveShadow
            geometry={nodes.Object_1062.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text199_634"
          position={[0.24, 0.15, 1.77]}
          rotation={[-0.08, 0, 0]}
          scale={[0.03, 0.02, 0.02]}
        >
          <mesh
            name="Object_1064"
            castShadow
            receiveShadow
            geometry={nodes.Object_1064.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text200_635"
          position={[0.14, 0.15, 1.77]}
          rotation={[-0.08, 0, 0]}
          scale={[0.03, 0.02, 0.02]}
        >
          <mesh
            name="Object_1066"
            castShadow
            receiveShadow
            geometry={nodes.Object_1066.geometry}
            material={materials["Material.071"]}
          />
        </group>
        <group
          name="Text201_636"
          position={[0.13, 0.15, 1.8]}
          rotation={[-0.08, 0, 0]}
          scale={[0.02, 0.01, 0.02]}
        >
          <mesh
            name="Object_1068"
            castShadow
            receiveShadow
            geometry={nodes.Object_1068.geometry}
            material={materials["Material.071"]}
          />
        </group>
        <group
          name="Text202_637"
          position={[0.35, 0.15, 1.77]}
          rotation={[-0.08, 0, 0]}
          scale={[0.03, 0.02, 0.02]}
        >
          <mesh
            name="Object_1070"
            castShadow
            receiveShadow
            geometry={nodes.Object_1070.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text203_638"
          position={[0.33, 0.15, 1.8]}
          rotation={[-0.08, 0, 0]}
          scale={[0.02, 0.01, 0.02]}
        >
          <mesh
            name="Object_1072"
            castShadow
            receiveShadow
            geometry={nodes.Object_1072.geometry}
            material={materials.Tasten_2}
          />
        </group>
        <group
          name="Text204_639"
          position={[-1.57, 0.14, 1.87]}
          rotation={[-0.07, 0, 0]}
          scale={0.02}
        >
          <mesh
            name="Object_1074"
            castShadow
            receiveShadow
            geometry={nodes.Object_1074.geometry}
            material={materials["Material.073"]}
          />
        </group>
        <group
          name="Empty003"
          position={[-2.71, 0.28, 1.18]}
          rotation={[1.44, 0, -2.44]}
          scale={0.19}
        >
          <group name="BezierCircle010" position={[-2.38, -0.85, 0.32]} />
          <mesh
            name="Circle007"
            castShadow
            receiveShadow
            geometry={nodes.Circle007.geometry}
            material={materials.Tela}
            position={[-2.02, -0.85, 0.32]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={1.02}
          />
          <mesh
            name="Circle008"
            castShadow
            receiveShadow
            geometry={nodes.Circle008.geometry}
            material={materials.Plastico}
            position={[-2.16, -0.85, 0.32]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={1.02}
          />
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials.metal}
            position={[-2.41, -0.71, -0.85]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.12}
          />
          <mesh
            name="Plane008"
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials["Plastico.001"]}
            position={[-2.38, -0.48, 0.29]}
          />
          <mesh
            name="Plane009"
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials.Tela}
            position={[-2.38, -0.85, 0.32]}
          />
        </group>
        {/* <pointLight */}
        {/*   name="Point001" */}
        {/*   intensity={1000} */}
        {/*   decay={2} */}
        {/*   color="#74b2ff" */}
        {/*   position={[-5.62, 4.48, 0.51]} */}
        {/*   rotation={[-Math.PI / 2, 0, 0]} */}
        {/* /> */}
        {/* <pointLight */}
        {/*   name="Point002" */}
        {/*   intensity={1000} */}
        {/*   decay={2} */}
        {/*   color="#9ffff7" */}
        {/*   position={[5.54, 4.48, 0.51]} */}
        {/*   rotation={[-Math.PI / 2, 0, 0]} */}
        {/* /> */}
        {/* <pointLight */}
        {/*   name="Point003" */}
        {/*   intensity={1500} */}
        {/*   decay={2} */}
        {/*   color="#1c5bff" */}
        {/*   position={[0.64, 5.92, -0.52]} */}
        {/*   rotation={[-Math.PI / 2, 0, 0]} */}
        {/* /> */}
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
        <mesh
          name="Plane006"
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.053"]}
          position={[1.96, 0.02, 1.42]}
          rotation={[Math.PI, -1.57, Math.PI]}
          scale={[0.76, 0.74, 0.95]}
        />
        <mesh
          name="Cube064"
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={materials["Material.074"]}
          position={[1.95, 0.06, 1.38]}
          rotation={[0, 1.57, 0]}
          scale={[-0.26, -0.14, -0.26]}
        />
        <mesh
          name="Cube067"
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={materials["Material.075"]}
          position={[1.95, 0.06, 1.38]}
          rotation={[0, 1.57, 0]}
          scale={[-0.26, -0.14, -0.26]}
        />
        <mesh
          name="Cube065"
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={materials["Material.074"]}
          position={[1.95, 0.06, 1.38]}
          rotation={[0, 1.57, 0]}
          scale={[-0.26, -0.14, -0.26]}
        />
        <mesh
          name="Cube066"
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={materials["Material.074"]}
          position={[1.95, 0.06, 1.38]}
          rotation={[0, 1.57, 0.01]}
          scale={[-0.26, -0.14, -0.26]}
        />
        <mesh
          name="Cube068"
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={materials["Material.076"]}
          position={[1.95, 0.06, 1.38]}
          rotation={[0, 1.57, 0.01]}
          scale={[-0.26, -0.14, -0.26]}
        />
        <mesh
          name="Cube072"
          castShadow
          receiveShadow
          geometry={nodes.Cube072.geometry}
          material={materials["Material.078"]}
          position={[1.95, 0.06, 1.38]}
          rotation={[0, 1.57, 0]}
          scale={[-0.26, -0.14, -0.26]}
        />
        <mesh
          name="Cube076"
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={materials["Material.080"]}
          position={[1.95, 0.07, 1.1]}
          rotation={[0, 1.57, 0.23]}
          scale={[-0.26, -0.14, -0.26]}
        />
        <mesh
          name="Cylinder022"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={materials["Material.081"]}
          position={[1.96, 0.07, 1.17]}
          rotation={[Math.PI / 2, 0, 1.57]}
          scale={[0.07, 0.02, 0.07]}
        />
        <mesh
          name="Cylinder023"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023.geometry}
          material={materials["Material.077"]}
          position={[1.95, 0.07, 1.17]}
          rotation={[Math.PI / 2, 0, 1.57]}
          scale={[0.07, 0, 0.07]}
        />
        <mesh
          name="Cylinder024"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024.geometry}
          material={materials["Material.082"]}
          position={[1.96, 0.07, 1.17]}
          rotation={[Math.PI / 2, 0, 1.57]}
          scale={[0.06, 0.02, 0.06]}
        />
        <mesh
          name="Cube081"
          castShadow
          receiveShadow
          geometry={nodes.Cube081.geometry}
          material={materials["Material.090"]}
          position={[1.95, 0.15, 1.27]}
          rotation={[1.66, -1.54, 1.89]}
          scale={[0.02, 0.01, 0.01]}
        />
        <mesh
          name="Cube069"
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={materials["Material.092"]}
          position={[1.95, 0.13, 1.49]}
          rotation={[-3.14, -1.57, 2.86]}
          scale={[0.04, 0.01, 0.04]}
        />
        <mesh
          name="Cube070"
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={materials["Material.093"]}
          position={[1.95, 0.06, 1.38]}
          rotation={[0, 1.57, 0]}
          scale={[-0.26, -0.14, -0.27]}
        />
        <mesh
          name="Cube088"
          castShadow
          receiveShadow
          geometry={nodes.Cube088.geometry}
          material={materials["Material.098"]}
          position={[1.83, 0.09, 1.3]}
          rotation={[3.14, -1.57, -3.01]}
          scale={[0.03, 0.01, 0.03]}
        />
        <mesh
          name="Object_8"
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Tastatur_Seite}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_10"
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Tastatur_Unterseite}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_12"
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Tastatur_Unterseite}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_14"
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials["Material.060"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_16"
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials["Material.060"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_18"
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials["Material.060"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_20"
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials["Material.060"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_22"
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials["Material.060"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_24"
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.Tastatur_Seite}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_26"
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials["Material.060"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_28"
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials["Material.060"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_30"
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials["Material.066"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_32"
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials["Material.060"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_34"
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials["Material.060"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_36"
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.Tastatur_Seite}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_38"
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.Tastatur_Seite}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_40"
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.Tastatur_Seite}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_42"
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.Tastatur_Seite}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_44"
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.Tastatur_Seite}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_47"
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_49"
          castShadow
          receiveShadow
          geometry={nodes.Object_49.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_51"
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_53"
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_55"
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_57"
          castShadow
          receiveShadow
          geometry={nodes.Object_57.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_59"
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_61"
          castShadow
          receiveShadow
          geometry={nodes.Object_61.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_63"
          castShadow
          receiveShadow
          geometry={nodes.Object_63.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_65"
          castShadow
          receiveShadow
          geometry={nodes.Object_65.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_67"
          castShadow
          receiveShadow
          geometry={nodes.Object_67.geometry}
          material={materials["Material.071"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_69"
          castShadow
          receiveShadow
          geometry={nodes.Object_69.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_71"
          castShadow
          receiveShadow
          geometry={nodes.Object_71.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_73"
          castShadow
          receiveShadow
          geometry={nodes.Object_73.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_75"
          castShadow
          receiveShadow
          geometry={nodes.Object_75.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_77"
          castShadow
          receiveShadow
          geometry={nodes.Object_77.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_79"
          castShadow
          receiveShadow
          geometry={nodes.Object_79.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_81"
          castShadow
          receiveShadow
          geometry={nodes.Object_81.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_83"
          castShadow
          receiveShadow
          geometry={nodes.Object_83.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_85"
          castShadow
          receiveShadow
          geometry={nodes.Object_85.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_87"
          castShadow
          receiveShadow
          geometry={nodes.Object_87.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_89"
          castShadow
          receiveShadow
          geometry={nodes.Object_89.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_91"
          castShadow
          receiveShadow
          geometry={nodes.Object_91.geometry}
          material={materials["Material.071"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_93"
          castShadow
          receiveShadow
          geometry={nodes.Object_93.geometry}
          material={materials["Material.073"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_95"
          castShadow
          receiveShadow
          geometry={nodes.Object_95.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_97"
          castShadow
          receiveShadow
          geometry={nodes.Object_97.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_99"
          castShadow
          receiveShadow
          geometry={nodes.Object_99.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_101"
          castShadow
          receiveShadow
          geometry={nodes.Object_101.geometry}
          material={materials["Material.071"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_103"
          castShadow
          receiveShadow
          geometry={nodes.Object_103.geometry}
          material={materials["Material.108"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_105"
          castShadow
          receiveShadow
          geometry={nodes.Object_105.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_107"
          castShadow
          receiveShadow
          geometry={nodes.Object_107.geometry}
          material={materials["Material.108"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_109"
          castShadow
          receiveShadow
          geometry={nodes.Object_109.geometry}
          material={materials["Material.073"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_111"
          castShadow
          receiveShadow
          geometry={nodes.Object_111.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_113"
          castShadow
          receiveShadow
          geometry={nodes.Object_113.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_115"
          castShadow
          receiveShadow
          geometry={nodes.Object_115.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_117"
          castShadow
          receiveShadow
          geometry={nodes.Object_117.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_119"
          castShadow
          receiveShadow
          geometry={nodes.Object_119.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_121"
          castShadow
          receiveShadow
          geometry={nodes.Object_121.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_123"
          castShadow
          receiveShadow
          geometry={nodes.Object_123.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_125"
          castShadow
          receiveShadow
          geometry={nodes.Object_125.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_127"
          castShadow
          receiveShadow
          geometry={nodes.Object_127.geometry}
          material={materials["Material.068"]}
          position={[-0.68, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={[0.95, 0.56, 0.56]}
        />
        <mesh
          name="Object_129"
          castShadow
          receiveShadow
          geometry={nodes.Object_129.geometry}
          material={materials["Material.070"]}
          position={[-0.59, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_131"
          castShadow
          receiveShadow
          geometry={nodes.Object_131.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_133"
          castShadow
          receiveShadow
          geometry={nodes.Object_133.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_135"
          castShadow
          receiveShadow
          geometry={nodes.Object_135.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_137"
          castShadow
          receiveShadow
          geometry={nodes.Object_137.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_139"
          castShadow
          receiveShadow
          geometry={nodes.Object_139.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_141"
          castShadow
          receiveShadow
          geometry={nodes.Object_141.geometry}
          material={materials["Material.073"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_143"
          castShadow
          receiveShadow
          geometry={nodes.Object_143.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_145"
          castShadow
          receiveShadow
          geometry={nodes.Object_145.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_147"
          castShadow
          receiveShadow
          geometry={nodes.Object_147.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_149"
          castShadow
          receiveShadow
          geometry={nodes.Object_149.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_151"
          castShadow
          receiveShadow
          geometry={nodes.Object_151.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_153"
          castShadow
          receiveShadow
          geometry={nodes.Object_153.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_155"
          castShadow
          receiveShadow
          geometry={nodes.Object_155.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_157"
          castShadow
          receiveShadow
          geometry={nodes.Object_157.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_159"
          castShadow
          receiveShadow
          geometry={nodes.Object_159.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_161"
          castShadow
          receiveShadow
          geometry={nodes.Object_161.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_163"
          castShadow
          receiveShadow
          geometry={nodes.Object_163.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_165"
          castShadow
          receiveShadow
          geometry={nodes.Object_165.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_167"
          castShadow
          receiveShadow
          geometry={nodes.Object_167.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_169"
          castShadow
          receiveShadow
          geometry={nodes.Object_169.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_171"
          castShadow
          receiveShadow
          geometry={nodes.Object_171.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_173"
          castShadow
          receiveShadow
          geometry={nodes.Object_173.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_175"
          castShadow
          receiveShadow
          geometry={nodes.Object_175.geometry}
          material={materials["Material.073"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_177"
          castShadow
          receiveShadow
          geometry={nodes.Object_177.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_179"
          castShadow
          receiveShadow
          geometry={nodes.Object_179.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_181"
          castShadow
          receiveShadow
          geometry={nodes.Object_181.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_183"
          castShadow
          receiveShadow
          geometry={nodes.Object_183.geometry}
          material={materials["Material.108"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_185"
          castShadow
          receiveShadow
          geometry={nodes.Object_185.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_187"
          castShadow
          receiveShadow
          geometry={nodes.Object_187.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_189"
          castShadow
          receiveShadow
          geometry={nodes.Object_189.geometry}
          material={materials["Material.073"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_191"
          castShadow
          receiveShadow
          geometry={nodes.Object_191.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_193"
          castShadow
          receiveShadow
          geometry={nodes.Object_193.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_195"
          castShadow
          receiveShadow
          geometry={nodes.Object_195.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_197"
          castShadow
          receiveShadow
          geometry={nodes.Object_197.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_199"
          castShadow
          receiveShadow
          geometry={nodes.Object_199.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_201"
          castShadow
          receiveShadow
          geometry={nodes.Object_201.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_203"
          castShadow
          receiveShadow
          geometry={nodes.Object_203.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_205"
          castShadow
          receiveShadow
          geometry={nodes.Object_205.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_207"
          castShadow
          receiveShadow
          geometry={nodes.Object_207.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_209"
          castShadow
          receiveShadow
          geometry={nodes.Object_209.geometry}
          material={materials["Material.108"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_211"
          castShadow
          receiveShadow
          geometry={nodes.Object_211.geometry}
          material={materials["Material.071"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_213"
          castShadow
          receiveShadow
          geometry={nodes.Object_213.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_215"
          castShadow
          receiveShadow
          geometry={nodes.Object_215.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_217"
          castShadow
          receiveShadow
          geometry={nodes.Object_217.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_219"
          castShadow
          receiveShadow
          geometry={nodes.Object_219.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_221"
          castShadow
          receiveShadow
          geometry={nodes.Object_221.geometry}
          material={materials["Material.068"]}
          position={[-0.68, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={[0.95, 0.56, 0.56]}
        />
        <mesh
          name="Object_223"
          castShadow
          receiveShadow
          geometry={nodes.Object_223.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_225"
          castShadow
          receiveShadow
          geometry={nodes.Object_225.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_227"
          castShadow
          receiveShadow
          geometry={nodes.Object_227.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_229"
          castShadow
          receiveShadow
          geometry={nodes.Object_229.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_231"
          castShadow
          receiveShadow
          geometry={nodes.Object_231.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_233"
          castShadow
          receiveShadow
          geometry={nodes.Object_233.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_235"
          castShadow
          receiveShadow
          geometry={nodes.Object_235.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_237"
          castShadow
          receiveShadow
          geometry={nodes.Object_237.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_239"
          castShadow
          receiveShadow
          geometry={nodes.Object_239.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_241"
          castShadow
          receiveShadow
          geometry={nodes.Object_241.geometry}
          material={materials["Material.108"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_243"
          castShadow
          receiveShadow
          geometry={nodes.Object_243.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_245"
          castShadow
          receiveShadow
          geometry={nodes.Object_245.geometry}
          material={materials["Material.108"]}
          position={[0, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={[0.88, 0.56, 0.56]}
        />
        <mesh
          name="Object_247"
          castShadow
          receiveShadow
          geometry={nodes.Object_247.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_249"
          castShadow
          receiveShadow
          geometry={nodes.Object_249.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_251"
          castShadow
          receiveShadow
          geometry={nodes.Object_251.geometry}
          material={materials["Material.108"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_253"
          castShadow
          receiveShadow
          geometry={nodes.Object_253.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_255"
          castShadow
          receiveShadow
          geometry={nodes.Object_255.geometry}
          material={materials["Material.068"]}
          position={[-0.64, 0.06, 1.48]}
          rotation={[-1.48, 0, 0]}
          scale={[0.49, 0.56, 0.56]}
        />
        <mesh
          name="Object_257"
          castShadow
          receiveShadow
          geometry={nodes.Object_257.geometry}
          material={materials["Material.068"]}
          position={[-0.64, 0.06, 1.48]}
          rotation={[-1.48, 0, 0]}
          scale={[0.49, 0.56, 0.56]}
        />
        <mesh
          name="Object_259"
          castShadow
          receiveShadow
          geometry={nodes.Object_259.geometry}
          material={materials["Material.069"]}
          position={[-0.59, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_261"
          castShadow
          receiveShadow
          geometry={nodes.Object_261.geometry}
          material={materials["Material.069"]}
          position={[-0.59, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_263"
          castShadow
          receiveShadow
          geometry={nodes.Object_263.geometry}
          material={materials["Material.069"]}
          position={[-0.58, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_265"
          castShadow
          receiveShadow
          geometry={nodes.Object_265.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.07, 1.46]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_267"
          castShadow
          receiveShadow
          geometry={nodes.Object_267.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_269"
          castShadow
          receiveShadow
          geometry={nodes.Object_269.geometry}
          material={materials["Material.108"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_271"
          castShadow
          receiveShadow
          geometry={nodes.Object_271.geometry}
          material={materials["Material.108"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_273"
          castShadow
          receiveShadow
          geometry={nodes.Object_273.geometry}
          material={materials["Material.071"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_275"
          castShadow
          receiveShadow
          geometry={nodes.Object_275.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_277"
          castShadow
          receiveShadow
          geometry={nodes.Object_277.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_279"
          castShadow
          receiveShadow
          geometry={nodes.Object_279.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_281"
          castShadow
          receiveShadow
          geometry={nodes.Object_281.geometry}
          material={materials["Material.073"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_283"
          castShadow
          receiveShadow
          geometry={nodes.Object_283.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_285"
          castShadow
          receiveShadow
          geometry={nodes.Object_285.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_287"
          castShadow
          receiveShadow
          geometry={nodes.Object_287.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_289"
          castShadow
          receiveShadow
          geometry={nodes.Object_289.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_291"
          castShadow
          receiveShadow
          geometry={nodes.Object_291.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_293"
          castShadow
          receiveShadow
          geometry={nodes.Object_293.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_295"
          castShadow
          receiveShadow
          geometry={nodes.Object_295.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_297"
          castShadow
          receiveShadow
          geometry={nodes.Object_297.geometry}
          material={materials["Material.071"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_299"
          castShadow
          receiveShadow
          geometry={nodes.Object_299.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_301"
          castShadow
          receiveShadow
          geometry={nodes.Object_301.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_303"
          castShadow
          receiveShadow
          geometry={nodes.Object_303.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_305"
          castShadow
          receiveShadow
          geometry={nodes.Object_305.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_307"
          castShadow
          receiveShadow
          geometry={nodes.Object_307.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_309"
          castShadow
          receiveShadow
          geometry={nodes.Object_309.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_311"
          castShadow
          receiveShadow
          geometry={nodes.Object_311.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_313"
          castShadow
          receiveShadow
          geometry={nodes.Object_313.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_315"
          castShadow
          receiveShadow
          geometry={nodes.Object_315.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_317"
          castShadow
          receiveShadow
          geometry={nodes.Object_317.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_319"
          castShadow
          receiveShadow
          geometry={nodes.Object_319.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_321"
          castShadow
          receiveShadow
          geometry={nodes.Object_321.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_323"
          castShadow
          receiveShadow
          geometry={nodes.Object_323.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_325"
          castShadow
          receiveShadow
          geometry={nodes.Object_325.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_327"
          castShadow
          receiveShadow
          geometry={nodes.Object_327.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_329"
          castShadow
          receiveShadow
          geometry={nodes.Object_329.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_331"
          castShadow
          receiveShadow
          geometry={nodes.Object_331.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_333"
          castShadow
          receiveShadow
          geometry={nodes.Object_333.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_335"
          castShadow
          receiveShadow
          geometry={nodes.Object_335.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_337"
          castShadow
          receiveShadow
          geometry={nodes.Object_337.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_339"
          castShadow
          receiveShadow
          geometry={nodes.Object_339.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_341"
          castShadow
          receiveShadow
          geometry={nodes.Object_341.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_343"
          castShadow
          receiveShadow
          geometry={nodes.Object_343.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_345"
          castShadow
          receiveShadow
          geometry={nodes.Object_345.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_347"
          castShadow
          receiveShadow
          geometry={nodes.Object_347.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_349"
          castShadow
          receiveShadow
          geometry={nodes.Object_349.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_351"
          castShadow
          receiveShadow
          geometry={nodes.Object_351.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_353"
          castShadow
          receiveShadow
          geometry={nodes.Object_353.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_355"
          castShadow
          receiveShadow
          geometry={nodes.Object_355.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_357"
          castShadow
          receiveShadow
          geometry={nodes.Object_357.geometry}
          material={materials["Material.073"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_359"
          castShadow
          receiveShadow
          geometry={nodes.Object_359.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_361"
          castShadow
          receiveShadow
          geometry={nodes.Object_361.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_363"
          castShadow
          receiveShadow
          geometry={nodes.Object_363.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_365"
          castShadow
          receiveShadow
          geometry={nodes.Object_365.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_367"
          castShadow
          receiveShadow
          geometry={nodes.Object_367.geometry}
          material={materials["Material.073"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_369"
          castShadow
          receiveShadow
          geometry={nodes.Object_369.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_371"
          castShadow
          receiveShadow
          geometry={nodes.Object_371.geometry}
          material={materials["Material.108"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_373"
          castShadow
          receiveShadow
          geometry={nodes.Object_373.geometry}
          material={materials["Material.108"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_375"
          castShadow
          receiveShadow
          geometry={nodes.Object_375.geometry}
          material={materials["Material.071"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_377"
          castShadow
          receiveShadow
          geometry={nodes.Object_377.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_379"
          castShadow
          receiveShadow
          geometry={nodes.Object_379.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_381"
          castShadow
          receiveShadow
          geometry={nodes.Object_381.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_383"
          castShadow
          receiveShadow
          geometry={nodes.Object_383.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_385"
          castShadow
          receiveShadow
          geometry={nodes.Object_385.geometry}
          material={materials["Material.073"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_387"
          castShadow
          receiveShadow
          geometry={nodes.Object_387.geometry}
          material={materials["Material.067"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_389"
          castShadow
          receiveShadow
          geometry={nodes.Object_389.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_391"
          castShadow
          receiveShadow
          geometry={nodes.Object_391.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_393"
          castShadow
          receiveShadow
          geometry={nodes.Object_393.geometry}
          material={materials["Material.072"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_395"
          castShadow
          receiveShadow
          geometry={nodes.Object_395.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_397"
          castShadow
          receiveShadow
          geometry={nodes.Object_397.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_399"
          castShadow
          receiveShadow
          geometry={nodes.Object_399.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_401"
          castShadow
          receiveShadow
          geometry={nodes.Object_401.geometry}
          material={materials["Material.108"]}
          position={[0, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={[0.88, 0.56, 0.56]}
        />
        <mesh
          name="Object_403"
          castShadow
          receiveShadow
          geometry={nodes.Object_403.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_405"
          castShadow
          receiveShadow
          geometry={nodes.Object_405.geometry}
          material={materials["Material.069"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_407"
          castShadow
          receiveShadow
          geometry={nodes.Object_407.geometry}
          material={materials["Material.108"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_409"
          castShadow
          receiveShadow
          geometry={nodes.Object_409.geometry}
          material={materials["Material.071"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_411"
          castShadow
          receiveShadow
          geometry={nodes.Object_411.geometry}
          material={materials.Tasten_2}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_413"
          castShadow
          receiveShadow
          geometry={nodes.Object_413.geometry}
          material={materials["Material.070"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_415"
          castShadow
          receiveShadow
          geometry={nodes.Object_415.geometry}
          material={materials["Material.068"]}
          position={[-0.69, 0.06, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_418"
          castShadow
          receiveShadow
          geometry={nodes.Object_418.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_420"
          castShadow
          receiveShadow
          geometry={nodes.Object_420.geometry}
          material={materials.Tasten}
          position={[-0.59, 0.05, 1.7]}
          rotation={[-1.48, 0, 0]}
          scale={[0.41, 0.56, 0.56]}
        />
        <mesh
          name="Object_422"
          castShadow
          receiveShadow
          geometry={nodes.Object_422.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_424"
          castShadow
          receiveShadow
          geometry={nodes.Object_424.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_426"
          castShadow
          receiveShadow
          geometry={nodes.Object_426.geometry}
          material={materials.Tasten}
          position={[-0.62, 0.07, 1.49]}
          rotation={[-1.48, 0, 0]}
          scale={[0.45, 0.56, 0.56]}
        />
        <mesh
          name="Object_428"
          castShadow
          receiveShadow
          geometry={nodes.Object_428.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_430"
          castShadow
          receiveShadow
          geometry={nodes.Object_430.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_432"
          castShadow
          receiveShadow
          geometry={nodes.Object_432.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_434"
          castShadow
          receiveShadow
          geometry={nodes.Object_434.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_436"
          castShadow
          receiveShadow
          geometry={nodes.Object_436.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_438"
          castShadow
          receiveShadow
          geometry={nodes.Object_438.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_440"
          castShadow
          receiveShadow
          geometry={nodes.Object_440.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_442"
          castShadow
          receiveShadow
          geometry={nodes.Object_442.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_444"
          castShadow
          receiveShadow
          geometry={nodes.Object_444.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_446"
          castShadow
          receiveShadow
          geometry={nodes.Object_446.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_448"
          castShadow
          receiveShadow
          geometry={nodes.Object_448.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_450"
          castShadow
          receiveShadow
          geometry={nodes.Object_450.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_452"
          castShadow
          receiveShadow
          geometry={nodes.Object_452.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_454"
          castShadow
          receiveShadow
          geometry={nodes.Object_454.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_456"
          castShadow
          receiveShadow
          geometry={nodes.Object_456.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_458"
          castShadow
          receiveShadow
          geometry={nodes.Object_458.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_460"
          castShadow
          receiveShadow
          geometry={nodes.Object_460.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_462"
          castShadow
          receiveShadow
          geometry={nodes.Object_462.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_464"
          castShadow
          receiveShadow
          geometry={nodes.Object_464.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_466"
          castShadow
          receiveShadow
          geometry={nodes.Object_466.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_468"
          castShadow
          receiveShadow
          geometry={nodes.Object_468.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_470"
          castShadow
          receiveShadow
          geometry={nodes.Object_470.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_472"
          castShadow
          receiveShadow
          geometry={nodes.Object_472.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_474"
          castShadow
          receiveShadow
          geometry={nodes.Object_474.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_476"
          castShadow
          receiveShadow
          geometry={nodes.Object_476.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_478"
          castShadow
          receiveShadow
          geometry={nodes.Object_478.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_480"
          castShadow
          receiveShadow
          geometry={nodes.Object_480.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_482"
          castShadow
          receiveShadow
          geometry={nodes.Object_482.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_484"
          castShadow
          receiveShadow
          geometry={nodes.Object_484.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_486"
          castShadow
          receiveShadow
          geometry={nodes.Object_486.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_488"
          castShadow
          receiveShadow
          geometry={nodes.Object_488.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_490"
          castShadow
          receiveShadow
          geometry={nodes.Object_490.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_492"
          castShadow
          receiveShadow
          geometry={nodes.Object_492.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_494"
          castShadow
          receiveShadow
          geometry={nodes.Object_494.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_496"
          castShadow
          receiveShadow
          geometry={nodes.Object_496.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_498"
          castShadow
          receiveShadow
          geometry={nodes.Object_498.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_500"
          castShadow
          receiveShadow
          geometry={nodes.Object_500.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_502"
          castShadow
          receiveShadow
          geometry={nodes.Object_502.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_504"
          castShadow
          receiveShadow
          geometry={nodes.Object_504.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_506"
          castShadow
          receiveShadow
          geometry={nodes.Object_506.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_508"
          castShadow
          receiveShadow
          geometry={nodes.Object_508.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_510"
          castShadow
          receiveShadow
          geometry={nodes.Object_510.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_512"
          castShadow
          receiveShadow
          geometry={nodes.Object_512.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_514"
          castShadow
          receiveShadow
          geometry={nodes.Object_514.geometry}
          material={materials.Tasten}
          position={[-0.59, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_516"
          castShadow
          receiveShadow
          geometry={nodes.Object_516.geometry}
          material={materials.Tasten}
          position={[-0.59, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_518"
          castShadow
          receiveShadow
          geometry={nodes.Object_518.geometry}
          material={materials.Tasten}
          position={[-0.59, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_520"
          castShadow
          receiveShadow
          geometry={nodes.Object_520.geometry}
          material={materials.Tasten}
          position={[-0.59, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_522"
          castShadow
          receiveShadow
          geometry={nodes.Object_522.geometry}
          material={materials.Tasten}
          position={[-0.59, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_524"
          castShadow
          receiveShadow
          geometry={nodes.Object_524.geometry}
          material={materials.Tasten}
          position={[-0.59, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_526"
          castShadow
          receiveShadow
          geometry={nodes.Object_526.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_528"
          castShadow
          receiveShadow
          geometry={nodes.Object_528.geometry}
          material={materials.Tasten}
          position={[-0.59, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_530"
          castShadow
          receiveShadow
          geometry={nodes.Object_530.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_532"
          castShadow
          receiveShadow
          geometry={nodes.Object_532.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_534"
          castShadow
          receiveShadow
          geometry={nodes.Object_534.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_536"
          castShadow
          receiveShadow
          geometry={nodes.Object_536.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_538"
          castShadow
          receiveShadow
          geometry={nodes.Object_538.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_540"
          castShadow
          receiveShadow
          geometry={nodes.Object_540.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_542"
          castShadow
          receiveShadow
          geometry={nodes.Object_542.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_544"
          castShadow
          receiveShadow
          geometry={nodes.Object_544.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_546"
          castShadow
          receiveShadow
          geometry={nodes.Object_546.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_548"
          castShadow
          receiveShadow
          geometry={nodes.Object_548.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_550"
          castShadow
          receiveShadow
          geometry={nodes.Object_550.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_552"
          castShadow
          receiveShadow
          geometry={nodes.Object_552.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_554"
          castShadow
          receiveShadow
          geometry={nodes.Object_554.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_556"
          castShadow
          receiveShadow
          geometry={nodes.Object_556.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_558"
          castShadow
          receiveShadow
          geometry={nodes.Object_558.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_560"
          castShadow
          receiveShadow
          geometry={nodes.Object_560.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_562"
          castShadow
          receiveShadow
          geometry={nodes.Object_562.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_564"
          castShadow
          receiveShadow
          geometry={nodes.Object_564.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_566"
          castShadow
          receiveShadow
          geometry={nodes.Object_566.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_568"
          castShadow
          receiveShadow
          geometry={nodes.Object_568.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_570"
          castShadow
          receiveShadow
          geometry={nodes.Object_570.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_572"
          castShadow
          receiveShadow
          geometry={nodes.Object_572.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_574"
          castShadow
          receiveShadow
          geometry={nodes.Object_574.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_576"
          castShadow
          receiveShadow
          geometry={nodes.Object_576.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_578"
          castShadow
          receiveShadow
          geometry={nodes.Object_578.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_580"
          castShadow
          receiveShadow
          geometry={nodes.Object_580.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_582"
          castShadow
          receiveShadow
          geometry={nodes.Object_582.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_584"
          castShadow
          receiveShadow
          geometry={nodes.Object_584.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_586"
          castShadow
          receiveShadow
          geometry={nodes.Object_586.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_588"
          castShadow
          receiveShadow
          geometry={nodes.Object_588.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_590"
          castShadow
          receiveShadow
          geometry={nodes.Object_590.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_592"
          castShadow
          receiveShadow
          geometry={nodes.Object_592.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_594"
          castShadow
          receiveShadow
          geometry={nodes.Object_594.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_596"
          castShadow
          receiveShadow
          geometry={nodes.Object_596.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_598"
          castShadow
          receiveShadow
          geometry={nodes.Object_598.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_600"
          castShadow
          receiveShadow
          geometry={nodes.Object_600.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_602"
          castShadow
          receiveShadow
          geometry={nodes.Object_602.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_604"
          castShadow
          receiveShadow
          geometry={nodes.Object_604.geometry}
          material={materials["Material.109"]}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_606"
          castShadow
          receiveShadow
          geometry={nodes.Object_606.geometry}
          material={materials.Tasten}
          position={[0.19, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={[0.97, 0.56, 0.56]}
        />
        <mesh
          name="Object_608"
          castShadow
          receiveShadow
          geometry={nodes.Object_608.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_610"
          castShadow
          receiveShadow
          geometry={nodes.Object_610.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_612"
          castShadow
          receiveShadow
          geometry={nodes.Object_612.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_614"
          castShadow
          receiveShadow
          geometry={nodes.Object_614.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_616"
          castShadow
          receiveShadow
          geometry={nodes.Object_616.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_618"
          castShadow
          receiveShadow
          geometry={nodes.Object_618.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_620"
          castShadow
          receiveShadow
          geometry={nodes.Object_620.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_622"
          castShadow
          receiveShadow
          geometry={nodes.Object_622.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_624"
          castShadow
          receiveShadow
          geometry={nodes.Object_624.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_626"
          castShadow
          receiveShadow
          geometry={nodes.Object_626.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_628"
          castShadow
          receiveShadow
          geometry={nodes.Object_628.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_630"
          castShadow
          receiveShadow
          geometry={nodes.Object_630.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_632"
          castShadow
          receiveShadow
          geometry={nodes.Object_632.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_634"
          castShadow
          receiveShadow
          geometry={nodes.Object_634.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_636"
          castShadow
          receiveShadow
          geometry={nodes.Object_636.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_638"
          castShadow
          receiveShadow
          geometry={nodes.Object_638.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_640"
          castShadow
          receiveShadow
          geometry={nodes.Object_640.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_642"
          castShadow
          receiveShadow
          geometry={nodes.Object_642.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_644"
          castShadow
          receiveShadow
          geometry={nodes.Object_644.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_646"
          castShadow
          receiveShadow
          geometry={nodes.Object_646.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_648"
          castShadow
          receiveShadow
          geometry={nodes.Object_648.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_650"
          castShadow
          receiveShadow
          geometry={nodes.Object_650.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_652"
          castShadow
          receiveShadow
          geometry={nodes.Object_652.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_654"
          castShadow
          receiveShadow
          geometry={nodes.Object_654.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_656"
          castShadow
          receiveShadow
          geometry={nodes.Object_656.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_658"
          castShadow
          receiveShadow
          geometry={nodes.Object_658.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_660"
          castShadow
          receiveShadow
          geometry={nodes.Object_660.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_662"
          castShadow
          receiveShadow
          geometry={nodes.Object_662.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_664"
          castShadow
          receiveShadow
          geometry={nodes.Object_664.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_666"
          castShadow
          receiveShadow
          geometry={nodes.Object_666.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_668"
          castShadow
          receiveShadow
          geometry={nodes.Object_668.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_670"
          castShadow
          receiveShadow
          geometry={nodes.Object_670.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_672"
          castShadow
          receiveShadow
          geometry={nodes.Object_672.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_674"
          castShadow
          receiveShadow
          geometry={nodes.Object_674.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_676"
          castShadow
          receiveShadow
          geometry={nodes.Object_676.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_678"
          castShadow
          receiveShadow
          geometry={nodes.Object_678.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_680"
          castShadow
          receiveShadow
          geometry={nodes.Object_680.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_682"
          castShadow
          receiveShadow
          geometry={nodes.Object_682.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_684"
          castShadow
          receiveShadow
          geometry={nodes.Object_684.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_686"
          castShadow
          receiveShadow
          geometry={nodes.Object_686.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_688"
          castShadow
          receiveShadow
          geometry={nodes.Object_688.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_690"
          castShadow
          receiveShadow
          geometry={nodes.Object_690.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_692"
          castShadow
          receiveShadow
          geometry={nodes.Object_692.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_694"
          castShadow
          receiveShadow
          geometry={nodes.Object_694.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_696"
          castShadow
          receiveShadow
          geometry={nodes.Object_696.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_698"
          castShadow
          receiveShadow
          geometry={nodes.Object_698.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_700"
          castShadow
          receiveShadow
          geometry={nodes.Object_700.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_702"
          castShadow
          receiveShadow
          geometry={nodes.Object_702.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_704"
          castShadow
          receiveShadow
          geometry={nodes.Object_704.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_706"
          castShadow
          receiveShadow
          geometry={nodes.Object_706.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_708"
          castShadow
          receiveShadow
          geometry={nodes.Object_708.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_710"
          castShadow
          receiveShadow
          geometry={nodes.Object_710.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_712"
          castShadow
          receiveShadow
          geometry={nodes.Object_712.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_714"
          castShadow
          receiveShadow
          geometry={nodes.Object_714.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_716"
          castShadow
          receiveShadow
          geometry={nodes.Object_716.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_718"
          castShadow
          receiveShadow
          geometry={nodes.Object_718.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_720"
          castShadow
          receiveShadow
          geometry={nodes.Object_720.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_722"
          castShadow
          receiveShadow
          geometry={nodes.Object_722.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_724"
          castShadow
          receiveShadow
          geometry={nodes.Object_724.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_726"
          castShadow
          receiveShadow
          geometry={nodes.Object_726.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_728"
          castShadow
          receiveShadow
          geometry={nodes.Object_728.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_730"
          castShadow
          receiveShadow
          geometry={nodes.Object_730.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_732"
          castShadow
          receiveShadow
          geometry={nodes.Object_732.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_734"
          castShadow
          receiveShadow
          geometry={nodes.Object_734.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_736"
          castShadow
          receiveShadow
          geometry={nodes.Object_736.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_738"
          castShadow
          receiveShadow
          geometry={nodes.Object_738.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_740"
          castShadow
          receiveShadow
          geometry={nodes.Object_740.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_742"
          castShadow
          receiveShadow
          geometry={nodes.Object_742.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_744"
          castShadow
          receiveShadow
          geometry={nodes.Object_744.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_746"
          castShadow
          receiveShadow
          geometry={nodes.Object_746.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_748"
          castShadow
          receiveShadow
          geometry={nodes.Object_748.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_750"
          castShadow
          receiveShadow
          geometry={nodes.Object_750.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_752"
          castShadow
          receiveShadow
          geometry={nodes.Object_752.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_754"
          castShadow
          receiveShadow
          geometry={nodes.Object_754.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_756"
          castShadow
          receiveShadow
          geometry={nodes.Object_756.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_758"
          castShadow
          receiveShadow
          geometry={nodes.Object_758.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_760"
          castShadow
          receiveShadow
          geometry={nodes.Object_760.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_762"
          castShadow
          receiveShadow
          geometry={nodes.Object_762.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_764"
          castShadow
          receiveShadow
          geometry={nodes.Object_764.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_766"
          castShadow
          receiveShadow
          geometry={nodes.Object_766.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_768"
          castShadow
          receiveShadow
          geometry={nodes.Object_768.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_770"
          castShadow
          receiveShadow
          geometry={nodes.Object_770.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_772"
          castShadow
          receiveShadow
          geometry={nodes.Object_772.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_774"
          castShadow
          receiveShadow
          geometry={nodes.Object_774.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_776"
          castShadow
          receiveShadow
          geometry={nodes.Object_776.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_778"
          castShadow
          receiveShadow
          geometry={nodes.Object_778.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_780"
          castShadow
          receiveShadow
          geometry={nodes.Object_780.geometry}
          material={materials.Tasten}
          position={[-0.69, 0.07, 1.6]}
          rotation={[-1.48, 0, 0]}
          scale={0.56}
        />
        <mesh
          name="Object_784"
          castShadow
          receiveShadow
          geometry={nodes.Object_784.geometry}
          material={materials["Material.068"]}
          position={[-0.3, 0.15, 1.76]}
          scale={0.31}
        />
        <mesh
          name="Object_786"
          castShadow
          receiveShadow
          geometry={nodes.Object_786.geometry}
          material={materials["Material.068"]}
          position={[-0.21, 0.14, 1.86]}
          rotation={[0, 1.57, 0]}
          scale={0.31}
        />
        <mesh
          name="Object_790"
          castShadow
          receiveShadow
          geometry={nodes.Object_790.geometry}
          material={materials["Material.068"]}
          position={[-0.19, 0.14, 1.87]}
          rotation={[Math.PI, -1.57, Math.PI]}
          scale={0.31}
        />
        <mesh
          name="Object_792"
          castShadow
          receiveShadow
          geometry={nodes.Object_792.geometry}
          material={materials["Material.068"]}
          position={[-0.11, 0.14, 1.86]}
          rotation={[Math.PI, -0.03, Math.PI]}
          scale={0.32}
        />
        <mesh
          name="Object_794"
          castShadow
          receiveShadow
          geometry={nodes.Object_794.geometry}
          material={materials["Material.108"]}
          position={[-1.85, 0.17, 1.54]}
          rotation={[0, 1.57, 0]}
          scale={0.18}
        />
        <mesh
          name="Object_796"
          castShadow
          receiveShadow
          geometry={nodes.Object_796.geometry}
          material={materials["Material.108"]}
          position={[-1.82, 0.17, 1.55]}
          rotation={[Math.PI, -1.57, Math.PI]}
          scale={0.18}
        />
        <mesh
          name="Cube071"
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={materials["Material.089"]}
          position={[3.77, 2.08, 0.08]}
          rotation={[1.5, -0.01, 0.25]}
          scale={[0.1, 0.03, 0.06]}
        />
        <mesh
          name="Cube079"
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={materials["Material.055"]}
          position={[3.18, 2.54, 0.02]}
          rotation={[-0.07, -0.32, 1.56]}
          scale={[2, 1.13, 0.02]}
        />
        <mesh
          name="Cube082"
          castShadow
          receiveShadow
          geometry={nodes.Cube082.geometry}
          material={materials["Material.044"]}
          position={[3.38, 2.54, 0.02]}
          rotation={[3.07, 0.37, -1.56]}
          scale={[-2, -0.94, -0.09]}
        />
        <mesh
          name="Cube083"
          castShadow
          receiveShadow
          geometry={nodes.Cube083.geometry}
          material={materials["Material.005"]}
          position={[2.3, 2.53, -0.32]}
          rotation={[-0.07, -0.32, 1.56]}
          scale={[2, 0.19, 0.02]}
        />
        <mesh
          name="MY_SCREEN001"
          castShadow
          receiveShadow
          geometry={nodes.MY_SCREEN001.geometry}
          material={materials["Material.036"]}
          position={[3.15, 2.54, 0.03]}
          rotation={[-0.03, 1.25, 1.53]}
          scale={[2.03, 2.03, 2.13]}
        />
        <mesh
          name="Cube092"
          castShadow
          receiveShadow
          geometry={nodes.Cube092.geometry}
          material={materials["Material.006"]}
          position={[3.87, 2.55, 0.13]}
          rotation={[-0.07, -0.32, 1.56]}
          scale={[1.03, 1.19, 0.11]}
        />
        <mesh
          name="Cube093"
          castShadow
          receiveShadow
          geometry={nodes.Cube093.geometry}
          material={materials["Material.007"]}
          position={[3.38, 1.65, -0.07]}
          rotation={[0, -0.36, 0]}
          scale={[0.1, 0.08, 0.18]}
        />
        <mesh
          name="Cube095"
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={materials["Material.043"]}
          position={[3.39, -0.54, -0.13]}
          rotation={[-0.07, -0.36, -0.03]}
          scale={[0.25, 3.26, 0.1]}
        />
        <mesh
          name="Cube096"
          castShadow
          receiveShadow
          geometry={nodes.Cube096.geometry}
          material={materials["Material.037"]}
          position={[3.44, 0.07, -0.18]}
          rotation={[-Math.PI, 0.36, 0]}
          scale={[-1.19, -0.06, -0.33]}
        />
        <mesh
          name="Cube097"
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={materials["Material.057"]}
          position={[3.37, 0.05, 0]}
          rotation={[0, 1.21, 0]}
          scale={[0.27, 0.03, 0.59]}
        />
        <group
          name="Cubo"
          position={[-1.43, 3.52, -0.38]}
          rotation={[0, 0.19, 0]}
        >
          <mesh
            name="Cubo_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cubo_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo_2.geometry}
            material={materials["Material.036"]}
          />
        </group>
        <group
          name="Plane007"
          position={[-1.42, 2.12, -0.42]}
          rotation={[Math.PI / 2, 0, -0.18]}
          scale={[3.38, 1.35, 1.27]}
        >
          <mesh
            name="Plane007_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plane007_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_2.geometry}
            material={materials["Material.036"]}
          />
          <mesh
            name="Plane007_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_3.geometry}
            material={materials["Material.091"]}
          />
        </group>
        <mesh
          name="Stand"
          castShadow
          receiveShadow
          geometry={nodes.Stand.geometry}
          material={materials["Material.101"]}
          position={[-1.47, 1.33, -0.75]}
          rotation={[0, 0.18, 0]}
          scale={1.35}
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
          name="Cube073"
          castShadow
          receiveShadow
          geometry={nodes.Cube073.geometry}
          material={materials["Material.079"]}
          position={[1.95, 0.06, 1.38]}
          rotation={[0, 1.57, 0]}
          scale={[-0.26, -0.14, -0.26]}
        />
        <mesh
          name="bg2001"
          castShadow
          receiveShadow
          geometry={nodes.bg2001.geometry}
          material={materials.bg2}
          position={[3.81, 3.87, -0.01]}
          rotation={[-0.05, 1.19, -1.59]}
          scale={0.69}
        />
        <mesh
          name="gigabyte-logo002"
          castShadow
          receiveShadow
          geometry={nodes["gigabyte-logo002"].geometry}
          material={materials["gigabyte-logo"]}
          position={[2.31, 3.86, -0.44]}
          rotation={[-0.03, 1.25, -1.61]}
          scale={0.15}
        />
        <mesh
          name="Color-PewDiePie-Logo"
          castShadow
          receiveShadow
          geometry={nodes["Color-PewDiePie-Logo"].geometry}
          material={materials["Color-PewDiePie-Logo"]}
          position={[1.95, 0.14, 1.49]}
          rotation={[0.28, 0, 0]}
          scale={0.08}
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
    </group>
  );
};

export default ContactV2;
