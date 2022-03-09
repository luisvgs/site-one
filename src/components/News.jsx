import { Html } from "@react-three/drei";
import NewsCard from "./NewsCard";
const News = () => {
  return (
    <mesh>
      <Html center distanceFactor={1} position={[12.6, 1.24, 2]}>
        <h1 style={{ color: "white" }}>News </h1>
        <NewsCard />
      </Html>
    </mesh>
  );
};

export default News;
