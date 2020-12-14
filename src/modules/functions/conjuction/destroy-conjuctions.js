import { conjuctionStack, gameplayHandler } from '../../const/const';
import { destroyStone } from '../stone-functions/destroy-stone';
import { field } from '../../const/const';

export const destroyConjuctions = () => {
  const score = conjuctionStack.storage.reduce((sum, element) => {
    if (element.lineSize === 3) {
      return sum + 30;
    } else {
      return sum + (element.lineSize * 30 + 100);
    }
  }, 0);
  gameplayHandler.score += score;

  conjuctionStack.storage.forEach(element => {
    element.cords.forEach(element => {
      destroyStone(field.findStone(element[0], element[1]));
    });
  });
  conjuctionStack.storage.length = 0;
}
