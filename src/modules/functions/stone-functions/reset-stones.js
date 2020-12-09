import { gameplayHandler } from '../../const/const';
import { findCell } from '../find-cell';

export const resetStones = (stone) => {
  findCell(gameplayHandler.selectedStone.cordX, gameplayHandler.selectedStone.cordY).firstChild.classList.toggle('stone_selected');
  gameplayHandler.selectedStone.selected = false;
  gameplayHandler.selectedStone = undefined;
  stone.selected = false;
  gameplayHandler.isSelectedFlag = false;
}
