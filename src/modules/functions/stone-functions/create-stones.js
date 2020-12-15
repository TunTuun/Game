import { field, fieldHeight, fieldWidth } from '../../const/const';
import { findCell } from '../find-cell';
import { Stone } from '../../classes/Stone';

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
      }
    }
  }
}