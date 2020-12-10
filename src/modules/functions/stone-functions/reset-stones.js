import { gameplayHandler } from '../../const/const';

export const resetStones = (stone) => {
  gameplayHandler.selectedStone.selected = false;
  gameplayHandler.selectedStone = undefined;
  gameplayHandler.isSelectedFlag = false;
  stone.selected = false;
}
