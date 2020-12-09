import { Stone } from '../../classes/stone';
import { moveStones } from '../stone-functions/move-stones';

export const initStones = (fieldStorage) => {
  const cellList = Array.from(document.getElementsByClassName('play-field__cell'));
  if (fieldStorage.fieldStorage.length) {
    fieldStorage.fieldStorage.length = 0;
    cellList.forEach(cell => {
      cell.removeChild(cell.firstChild);
    });
  }
  cellList.forEach(cell => {
    const stoneData = new Stone(cell.getAttribute('x'), cell.getAttribute('y'));
    fieldStorage.addStone(stoneData);
    const stone = document.createElement('div');
    stone.classList.add('stone', 'stone_color_' + stoneData.type);
    cell.append(stone);
    stone.addEventListener("click", () => { moveStones(stoneData) });
  })
}
