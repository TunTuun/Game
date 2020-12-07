import { findCell } from "./find-cell";
import { animateStones } from "./animate-stone";

export const swapStones = function (firstStone, secondStone, isSwappable) {
  const firstCell = findCell(firstStone.cordX, firstStone.cordY);
  const secondCell = findCell(secondStone.cordX, secondStone.cordY);
  if (isSwappable) {
    animateStones(firstCell, secondCell, true)
  } else {
    animateStones(firstCell, secondCell, false)
  }
}