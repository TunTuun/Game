import { Stone } from '../../classes/stone';
import { field } from '../../const/const';

export const initStones = () => {
  const cellList = Array.from(document.getElementsByClassName('play-field__cell'));
  if (field.storage.length) {
    field.storage.length = 0;
    cellList.forEach(cell => cell.removeChild(cell.firstChild));
  }
  cellList.forEach(cell => {
    const stoneData = new Stone(cell.getAttribute('x'), cell.getAttribute('y'));
    field.addStone(stoneData);
    const stone = document.createElement('div');
    stone.classList.add('stone', 'stone_color_' + stoneData.type);
    cell.append(stone);
  });
}
