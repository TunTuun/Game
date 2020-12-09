import { findCell } from "../find-cell";
import { fieldStorage, fieldWidth } from '../../const/const';
import { animationInit } from '../animation/animation-init';

export const dropStone = (stone) => {
  const cell = findCell(stone.cordX, stone.cordY);
  const dropCell = findCell(stone.cordX, String(+stone.cordY + 1));
  const moveIndex = fieldStorage.fieldStorage.findIndex(item => item === stone) + fieldWidth;
  fieldStorage.fieldStorage[moveIndex] = stone;
  stone.cordY = String(+(stone.cordY) + 1);
  fieldStorage.fieldStorage[(fieldStorage.fieldStorage.findIndex(item => item === stone))] = undefined;
  animationInit(cell, dropCell, false);
}
