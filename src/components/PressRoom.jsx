import PressRoomComponent from "./PressRoomComponent";
import PressRoomLights from "./PressRoomLights";

const PressRoom = () => {
  return (
    <>
      <PressRoomComponent position={[19.68, 0.652, 2]} />
      <PressRoomLights position={[20.07, -3, 2.0]} />
    </>
  );
};

export default PressRoom;
