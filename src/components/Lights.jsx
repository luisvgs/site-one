const Lights = () => {
  return (
    <spotLight
      castShadow
      intensity={1}
      power={11.666}
      distance={9.64}
      angle={0.381}
      decay={0.34}
      color="#1218c4"
      penumbra={1}
      position={[1.0, 0.23, 6.204]}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-camera-bottom={-10}
    />
  );
};

export default Lights;
