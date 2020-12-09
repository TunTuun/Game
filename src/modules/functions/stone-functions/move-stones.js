import { isSwappable } from "./is-swappable";
import { resetStones } from "./reset-stones";
import { gameplayHandler } from "../../const/const";
import { swapStones } from './swap-stones';
import { forbideActions } from '../forbide-actions';
import { findCell } from '../find-cell';

export const moveStones = (stone) => {
  if (stone.selected && stone === gameplayHandler.selectedStone) {
    findCell(gameplayHandler.selectedStone.cordX, gameplayHandler.selectedStone.cordY)
    .firstChild.classList.toggle('stone_selected');
    stone.selected = false;
    gameplayHandler.isSelectedFlag = false;
    gameplayHandler.selectedStone = undefined;
  } else {
    if (gameplayHandler.isSelectedFlag) {
      if (isSwappable(gameplayHandler.selectedStone, stone)) {
        forbideActions();
        swapStones(gameplayHandler.selectedStone, stone);
        resetStones(stone);
      } else {
        resetStones(stone);
      }
    } else {
      stone.selected = true;
      gameplayHandler.isSelectedFlag = true;
      gameplayHandler.selectedStone = stone;
      findCell(gameplayHandler.selectedStone.cordX, gameplayHandler.selectedStone.cordY)
      .firstChild.classList.toggle('stone_selected');
    }
  }
}
