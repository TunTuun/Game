import { findCell } from '../find-cell';
import { field, fieldWidth } from '../../const/const';

export const dropStone = (stone) => {
  const cell = findCell(stone.cordX, stone.cordY);
  const dropCell = findCell(stone.cordX, String(+stone.cordY + 1));
  const moveIndex = field.storage.findIndex(item => item === stone) + fieldWidth;
  field.storage[moveIndex] = stone;
  stone.cordY = String(+(stone.cordY) + 1);
  field.storage[(field.storage.findIndex(item => item === stone))] = null;
  // animationInit(cell, dropCell, false); Нужна кастомная анимация
}
