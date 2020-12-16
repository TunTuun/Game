import { findCell } from '../find-cell'
import { field } from '../../const/const';

export const destroyStone = (stone) => {
  if (stone) {
    const cell = findCell(stone.cordX, stone.cordY);
    const destroyIndex = field.storage.findIndex(item => item === stone);
    field.storage.splice(destroyIndex, 1);
    cell.firstChild.remove();
  }
}
