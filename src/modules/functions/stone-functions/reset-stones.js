import { gameplayHandler } from '../../const/const';
import { findCell } from '../find-cell';

export const resetStones = (stone) => {
  gameplayHandler.selectedStone.selected = false;
  gameplayHandler.selectedStone = undefined;
  gameplayHandler.isSelectedFlag = false;
  stone.selected = false;
}
