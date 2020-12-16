import { conjuctionStack } from '../../const/const';
import { findConjuctions } from '../conjuction/find-conjuctions';
import { destroyConjuctions } from '../conjuction/destroy-conjuctions';
import { dropStones } from '../stone-functions/drop-stones';
import { unlockField } from '../unlock-field';
import { createStones } from '../stone-functions/create-stones';

export const checkConjuctions = (initCheck) => {
  findConjuctions();
  if (!(conjuctionStack.storage.length === 0)) {
    if (initCheck) { destroyConjuctions(initCheck) }
    else { destroyConjuctions() }
    dropStones();
    createStones();
    if (initCheck) { checkConjuctions(true) }
    else { checkConjuctions() }
  } else {
    unlockField();
  }
}
