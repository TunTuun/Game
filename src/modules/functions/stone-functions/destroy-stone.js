import { findCell } from '../find-cell'
import { fieldStorage } from '../../const/const';

export const destroyStone = (stone) => {
  const cell = findCell(stone.cordX, stone.cordY);
  let destroyIndex = fieldStorage.fieldStorage.findIndex(item => item === stone);
  fieldStorage.fieldStorage[destroyIndex] = null;
  cell.firstChild.remove();
}
