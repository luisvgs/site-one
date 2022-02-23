import { KernelSize } from "postprocessing";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import { useControls } from "leva";

const PostProcessing = () => {
  const resolution = {
    low: 240,
    mid: 480,
    high: 720,
  };
  const { width, height, intensity, luminanceSmoothing } = useControls({
    intensity: { value: 0.5, min: 0, max: 2.0, step: 0.2 },
    luminanceSmoothing: { value: 0.8, min: 0.0, max: 1, step: 0.1 },
    width: { options: resolution },
    height: { options: resolution },
  });
  return (
    <EffectComposer>
      <Noise opacity={0.01} />
      <Bloom
        blurPass={undefined}
        intensity={intensity}
        width={width}
        height={height}
        kernelSize={KernelSize.MEDIUM}
        luminanceThreshold={0.5}
        luminanceSmoothing={luminanceSmoothing}
      />
    </EffectComposer>
  );
};

export default PostProcessing;
