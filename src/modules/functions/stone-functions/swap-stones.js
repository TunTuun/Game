import { findCell } from '../find-cell';
import { animationInit } from '../animation/animation-init';
import { findConjuctions } from '../conjuction/find-conjuctions';
import { conjuctionStack } from '../../const/const';
import { lockField } from '../lock-field';

export const swapStones = (firstStone, secondStone) => {
  lockField();
  const firstCell = findCell(firstStone.cordX, firstStone.cordY);
  const secondCell = findCell(secondStone.cordX, secondStone.cordY);

  const swap = [firstStone.cordX, firstStone.cordY, secondStone.cordX, secondStone.cordY];
  firstStone.cordX = swap[2];
  firstStone.cordY = swap[3];
  secondStone.cordX = swap[0];
  secondStone.cordY = swap[1];

  findConjuctions();
  const returnStones = conjuctionStack.storage.length === 0 ? true : false;
  if (returnStones) {
    animationInit(firstCell, secondCell, returnStones);
    firstStone.cordX = swap[0];
    firstStone.cordY = swap[1];
    secondStone.cordX = swap[2];
    secondStone.cordY = swap[3];
  } else {
    animationInit(firstCell, secondCell, returnStones);
  }
}
