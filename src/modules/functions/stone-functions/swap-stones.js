import { findCell } from '../find-cell';
import { animationInit } from '../animation/animation-init';

export const swapStones = (firstStone, secondStone) => {
  const firstCell = findCell(firstStone.cordX, firstStone.cordY);
  const secondCell = findCell(secondStone.cordX, secondStone.cordY);
  const swap = [firstStone.cordX, firstStone.cordY];
  firstStone.cordX = secondStone.cordX;
  firstStone.cordY = secondStone.cordY;
  secondStone.cordX = swap[0];
  secondStone.cordY = swap[1];
  const returnStones = false; // Нужно ли возвращать камни на место (появится после разработки обработчика)
  if (returnStones) {
    animationInit(firstCell, secondCell, returnStones);
    firstStone.cordX = secondStone.cordX;
    firstStone.cordY = secondStone.cordY;
    secondStone.cordX = swap[0];
    secondStone.cordY = swap[1];
  } else {
    animationInit(firstCell, secondCell, returnStones);
  }
}
