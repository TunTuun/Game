import { isSwappable } from "./is-swappable";
import { resetStones } from "./reset-stones";
import { gameplayHandler } from "../const/const";
import { swapStones } from './swap-stones';

export const moveStones = function (stone) {
  if (stone.selected && stone === gameplayHandler.selectedStone) {
    stone.selected = false;
    gameplayHandler.flag = false;
    gameplayHandler.selectedStone = undefined;
  } else {
    if (gameplayHandler.flag) {
      if (isSwappable(gameplayHandler.selectedStone, stone)) {
        swapStones(gameplayHandler.selectedStone, stone, true);
        resetStones(stone);
      } else {
        swapStones(gameplayHandler.selectedStone, stone, false);
        resetStones(stone);
      }
    } else {
      stone.selected = true;
      gameplayHandler.flag = true;
      gameplayHandler.selectedStone = stone;
    }
  }
}