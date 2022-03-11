import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 0.020, mouse.y * 0.020, camera.position.z),
      0.011
    )
  );
};

export default Rig;
