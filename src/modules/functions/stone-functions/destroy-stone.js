import { findCell } from "../find-cell"

import { fieldStorage } from '../../const/const';

export const destroyStone = (stone) => {
  const cell = findCell(stone.cordX, stone.cordY);
  console.log(fieldStorage.fieldStorage[0]);
}