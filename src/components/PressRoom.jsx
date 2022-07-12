import PressRoomComponent from "./PressRoomComponent";
import PressRoomLights from "./PressRoomLights";

const PressRoom = () => {
  return (
    <>
      <PressRoomComponent />
      <PressRoomLights position={[16.9, -3, 2.0]} />
    </>
  );
};

export default PressRoom;
