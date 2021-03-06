import { field, fieldHeight, fieldWidth } from '../../const/const';
import { findCell } from '../find-cell';
import { Stone } from '../../classes/stone';

export const createStones = () => {
  for (let y = 1; y <= fieldHeight; y++) {
    for (let x = 1; x <= fieldWidth; x++) {
      if (!(field.findStone(String(x), String(y)))) {
        const stone = new Stone(String(x), String(y));
        field.addStone(stone);
        const stoneCell = findCell(String(x), String(y));
        const stoneOnField = document.createElement('div');
        stoneOnField.classList.add('stone', 'stone_color_' + stone.type);
        stoneCell.append(stoneOnField);
        // const start = Date.now();
        // stoneCell.firstChild.style.width = '0%';
        // const timer = setInterval(function () {
        //   const timePassed = Date.now() - start;
        //   if (parseInt(stoneCell.firstChild.style.width, 10) < 90) {
        //     stoneCell.firstChild.style.width = (timePassed / 5.555) + '%';
        //     stoneCell.firstChild.style.height = (timePassed / 5.555) + '%';
        //   }
        //   if (timePassed > 500) {
        //     clearInterval(timer);
        //   }
        // }, 20);
      }
    }
  }
}
