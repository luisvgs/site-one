import { proxy } from "valtio";

/* Menu state behaves as follows:
    First scene represents index 1
    Second scene represents index 2
    And so on..*/

export const state = proxy({
  clicked: 0,
  hovered: null,
  zoom: false,
  mapZoom: false,
});
