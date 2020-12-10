import { gameplayHandler } from '../../const/const';
import { findCell } from '../find-cell';

export const firstStoneSelector = (stone) => {
  stone.selected = true;
  gameplayHandler.isSelectedFlag = true;
  gameplayHandler.selectedStone = stone;
  findCell(gameplayHandler.selectedStone.cordX, gameplayHandler.selectedStone.cordY)
    .firstChild.classList.toggle('stone_selected');
}
