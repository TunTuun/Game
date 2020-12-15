import { conjuctionStack } from '../../const/const';
import { findConjuctions } from '../conjuction/find-conjuctions';
import { destroyConjuctions } from '../conjuction/destroy-conjuctions';
import { dropStones } from '../stone-functions/drop-stones';
import { unlockField } from '../unlock-field';
import { createStones } from '../stone-functions/create-stones';

export const checkConjuctions = () => {
  findConjuctions();
  if (!(conjuctionStack.storage.length === 0)) {
    destroyConjuctions();
    dropStones();
    createStones();
    checkConjuctions();
  } else {
    unlockField();
  }
}
