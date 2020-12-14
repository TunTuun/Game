import { findCell } from '../find-cell';

export const dropAnimation = (cordX, cordY) => {
  const start = Date.now();
  const stoneCell = findCell(cordX, cordY);
  const dropStoneCell = findCell(cordX, String(+cordY + 1));
  const timer = setInterval(function () {
    const timePassed = Date.now() - start;
    stoneCell.firstChild.style.top = 5 + (timePassed / 20) + '%';
    if (timePassed > 500) {
      dropStoneCell.append(stoneCell.firstChild);
      firstCell.firstChild.style = '';
      clearInterval(timer);
    }
  }, 20)
}
