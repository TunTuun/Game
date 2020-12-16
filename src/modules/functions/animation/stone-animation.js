import { unlockField } from '../unlock-field';
import { destroyConjuctions } from '../conjuction/destroy-conjuctions';
import { dropStones } from '../stone-functions/drop-stones';
import { checkConjuctions } from '../conjuction/check-conjuctions';
import { createStones } from '../stone-functions/create-stones';

export const stoneAnimation = (firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones) => {
  const animate = new Promise((resolve) => {
    const start = Date.now();
    const timer = setInterval(function () { 
      const timePassed = Date.now() - start;
      firstCell.firstChild.style[firstStoneStyle] = 5 + (timePassed / 10) + '%';
      if (secondCell.firstChild)
        secondCell.firstChild.style[secondStoneStyle] = 5 + (timePassed / 10) + '%';
      if (timePassed > 1000) {
        clearInterval(timer);
        resolve();
      }
    }, 20);
  })
    .then(() => {
      if (returnStones) {
        const start = Date.now();
        const timer = setInterval(function () {
          const timePassed = Date.now() - start;
          firstCell.firstChild.style[firstStoneStyle] = 105 - (timePassed / 10) + '%';
          secondCell.firstChild.style[secondStoneStyle] = 105 - (timePassed / 10) + '%';
          if (timePassed > 1000) {
            clearInterval(timer);
            firstCell.firstChild.style = '';
            secondCell.firstChild.style = '';
            unlockField();
          }
        }, 20);
      } else {
          secondCell.append(firstCell.firstChild);
          firstCell.append(secondCell.firstChild);
          firstCell.firstChild.style = '';
          secondCell.firstChild.style = '';
        destroyConjuctions();
        dropStones();
        createStones();
        checkConjuctions();
      }
    })
}
