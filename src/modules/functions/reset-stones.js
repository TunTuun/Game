import { gameplayHandler } from '../const/const'

export const resetStones = function (stone){
  gameplayHandler.selectedStone.selected = false;
  gameplayHandler.selectedStone = undefined;
  stone.selected = false;
  gameplayHandler.flag = false;
}