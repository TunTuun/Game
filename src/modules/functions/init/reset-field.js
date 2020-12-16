import { initStones } from '../init/init-stones';
import { checkConjuctions } from '../conjuction/check-conjuctions';
import { gameplayHandler } from '../../const/const';

export const resetField = () => {
  gameplayHandler.score = 0;
  initStones();
  checkConjuctions(true);
  document.querySelector('.score__value').textContent = gameplayHandler.score;
}
