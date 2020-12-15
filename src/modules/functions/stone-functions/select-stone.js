import { isSwappable } from './is-swappable';
import { resetStones } from './reset-stones';
import { gameplayHandler } from '../../const/const';
import { swapStones } from './swap-stones';
import { forbideActions } from '../lock-field';
import { findCell } from '../find-cell';
import { firstStoneSelector } from './first-stone-selector';

export const selectStone = (stone) => {
  if (stone.selected && stone === gameplayHandler.selectedStone) {
    findCell(gameplayHandler.selectedStone.cordX, gameplayHandler.selectedStone.cordY)
      .firstChild.classList.toggle('stone_selected');
    stone.selected = false;
    gameplayHandler.isSelectedFlag = false;
    gameplayHandler.selectedStone = null;
  } else {
    if (gameplayHandler.isSelectedFlag) {
      if (isSwappable(gameplayHandler.selectedStone, stone)) {
        findCell(gameplayHandler.selectedStone.cordX, gameplayHandler.selectedStone.cordY).firstChild.classList.toggle('stone_selected');
        swapStones(gameplayHandler.selectedStone, stone);
        resetStones(stone);
      } else {
        findCell(gameplayHandler.selectedStone.cordX, gameplayHandler.selectedStone.cordY).firstChild.classList.toggle('stone_selected');
        resetStones(stone);
        firstStoneSelector(stone);
      }
    } else {
      firstStoneSelector(stone);
    }
  }
}
