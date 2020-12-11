import { findCell } from '../find-cell';
import { animationInit } from '../animation/animation-init';
import { findConjuctions } from '../conjuction/find-conjuctions';
import { findConjuctionsVertical } from '../conjuction/find-conjuctions-vertical';
import { conjuctionStack } from '../../const/const';

import { field } from '../../const/const';

export const swapStones = (firstStone, secondStone) => {
  const firstCell = findCell(firstStone.cordX, firstStone.cordY);
  const secondCell = findCell(secondStone.cordX, secondStone.cordY);

  const swap = [firstStone.cordX, firstStone.cordY];
  firstStone.cordX = secondStone.cordX;
  firstStone.cordY = secondStone.cordY;
  secondStone.cordX = swap[0];
  secondStone.cordY = swap[1];

  let returnStones = true;
  // findConjuctions();
  // findConjuctionsVertical();
  // if (!conjuctionStack.storage.length === 0) {
  //   console.log('Совпадения найдены!');
  //   returnStones = false;
  // } else {
  //   returnStones = true;
  // }
  
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
