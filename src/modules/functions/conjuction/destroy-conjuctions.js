import { conjuctionStack, gameplayHandler } from '../../const/const';
import { destroyStone } from '../stone-functions/destroy-stone';
import { field } from '../../const/const';

export const destroyConjuctions = () => {
  const score = conjuctionStack.storage.reduce((sum, element) => {
    if (element.size === 3) {
      return sum + 30;
    } else {
      return sum + (element.size * 30 + 100);
    }
  }, 0);
  gameplayHandler.score = gameplayHandler.score + score;
  document.querySelector('.score__value').textContent = gameplayHandler.score; 
  if (localStorage.getItem('record') < gameplayHandler.score) {
    localStorage.setItem('record', gameplayHandler.score);
    document.querySelector('.record__value').textContent = localStorage.getItem('record');
  }
  conjuctionStack.storage.forEach(element => {
    element.cords.forEach(element => {
      destroyStone(field.findStone(element[0], element[1]));
    });
  });
  conjuctionStack.storage.length = 0;
}
