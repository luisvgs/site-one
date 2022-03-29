import { Html, Box } from "@react-three/drei";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <Box position={[12.9, 1.2, 2]} scale={[1.4, 0.9, 0.02]}>
      <mesh position={[-0.12, 0, 0]}>
        <Html zIndexRange={[1, 0]} center distanceFactor={1}>
          <NewsCard />
        </Html>
      </mesh>
      <meshStandardMaterial color="black" opacity={0.02} transparent />
    </Box>
  );
};

export default News;
