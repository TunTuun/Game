import { forbideActions } from '../forbide-actions';

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
    .then((resolve) => {
      if (returnStones) { // Обработчик, если метод проходки не вернул совпадений (returnStones = true)
        const start = Date.now();
        const timer = setInterval(function () {
          const timePassed = Date.now() - start;
          firstCell.firstChild.style[firstStoneStyle] = 105 - (timePassed / 10) + '%';
          secondCell.firstChild.style[secondStoneStyle] = 105 - (timePassed / 10) + '%';
          if (timePassed > 1000) {
            clearInterval(timer);
            firstCell.firstChild.style = '';
            secondCell.firstChild.style = '';
            forbideActions();
          }
        }, 20);
      } else {
        if (secondCell.firstChild) {
          secondCell.append(firstCell.firstChild);
          firstCell.append(secondCell.firstChild);
          firstCell.firstChild.style = '';
          secondCell.firstChild.style = '';
        }
        else {
          secondCell.append(firstCell.firstChild);
          secondCell.firstChild.style = '';
        }
        forbideActions();
      }
    })
}
