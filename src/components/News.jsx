import { Html } from "@react-three/drei";
import NewsCard from "./NewsCard";
const News = () => {
  return (
    <mesh>
      <Html center position={[12.6, 1.26, 2]}>
        <h1 style={{ color: "white" }}>News </h1>
        <NewsCard />
      </Html>
    </mesh>
  );
};

export default News;
