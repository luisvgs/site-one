import { KernelSize, BlurPass } from "postprocessing";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import { useControls } from "leva";

const PostProcessing = () => {
  const resolution = {
    low: 240,
    mid: 480,
    high: 720,
  };
  const { width, height, intensity, luminanceSmoothing, luminanceThreshold } =
    useControls({
      intensity: { value: 0.5, min: 0.0, max: 1.0, step: 0.1 },
      luminanceSmoothing: { value: 0.025, min: 0.0, max: 1.0, step: 0.01 },
      luminanceThreshold: { value: 0.9, min: 0.1, max: 1.0, step: 0.01 },
      width: { options: resolution },
      height: { options: resolution },
    });
  return (
    <EffectComposer>
      <Noise opacity={0.01} />
      <Bloom
        blurPass={BlurPass}
        intensity={intensity}
        width={720}
        height={720}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={luminanceThreshold}
        luminanceSmoothing={luminanceSmoothing}
      />
    </EffectComposer>
  );
};

export default PostProcessing;
