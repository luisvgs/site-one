const Selector = () => {
  return (
    <Diamond
      position={[0.205, 0.78, 2]}
      rotation={[0, 0, -Math.PI / 4]}
      scale={[1, 1, 1]}
    >
      <meshBasicMaterial color="aqua" />
    </Diamond>
  );
};
export default Selector;
