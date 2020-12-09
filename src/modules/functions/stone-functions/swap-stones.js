import { findCell } from "../find-cell";
import { animationInit } from "../animation/animation-init";

export const swapStones = (firstStone, secondStone) => {
  const returnStones = false; // Нужно ли возвращать камни на место (появится после разработки обработчика)
  const firstCell = findCell(firstStone.cordX, firstStone.cordY);
  const secondCell = findCell(secondStone.cordX, secondStone.cordY);
  animationInit(firstCell, secondCell, returnStones);
}
