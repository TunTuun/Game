import { isSwappable } from './is-swappable';
import { resetStones } from './reset-stones';
import { gameplayHandler } from '../../const/const';
import { swapStones } from './swap-stones';
import { forbideActions } from '../forbide-actions';
import { findCell } from '../find-cell';

export const moveStones = (stone) => {
  if (stone.selected && stone === gameplayHandler.selectedStone) {
    findCell(gameplayHandler.selectedStone.cordX, gameplayHandler.selectedStone.cordY)
    .firstChild.classList.toggle('stone_selected');
    stone.selected = false;
    gameplayHandler.isSelectedFlag = false;
    gameplayHandler.selectedStone = null;
  } else {
    if (gameplayHandler.isSelectedFlag) {
      if (isSwappable(gameplayHandler.selectedStone, stone)) {
        forbideActions();
        findCell(gameplayHandler.selectedStone.cordX, gameplayHandler.selectedStone.cordY).firstChild.classList.toggle('stone_selected');
        swapStones(gameplayHandler.selectedStone, stone);
        resetStones(stone);
      } else {
        findCell(gameplayHandler.selectedStone.cordX, gameplayHandler.selectedStone.cordY).firstChild.classList.toggle('stone_selected');
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
