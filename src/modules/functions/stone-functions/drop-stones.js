import { field, fieldHeight, fieldWidth } from '../../const/const';
import { findCell } from '../find-cell';

export const dropStones = () => {
  // const dropAnimation = (currentCell) => {
  //   return new Promise((resolve) => {
  //     const start = Date.now();
  //     const timer = setInterval(function () {
  //       const timePassed = Date.now() - start;
  //       currentCell.firstChild.style.top = 'px';
  //       if (timePassed > 300) {
  //         clearInterval(timer);
  //         resolve();
  //       }
  //     }, 10);
  //   })
  // }
  const checkColumn = (columnIndex, rowIndex) => {
    while (rowIndex >= 1) {
      if (field.findStone(columnIndex, rowIndex)) {
        if (field.findStone(columnIndex, rowIndex + 1)) {
          rowIndex--;
        } else {
          const currentStone = field.findStone(columnIndex, rowIndex);
          const currentCell = findCell(currentStone.cordX, currentStone.cordY);
          const dropCell = findCell(currentStone.cordX, String(+currentStone.cordY + 1));
          // dropAnimation(currentCell);
          dropCell.append(currentCell.firstChild);
          currentStone.cordY = String(+currentStone.cordY + 1);
          rowIndex = fieldHeight - 1;
        }
      } else {
        rowIndex--;
      }
    }
  }
  const rowIndex = fieldHeight - 1;
  for (let columnIndex = 1; columnIndex <= fieldWidth; columnIndex++) {
    checkColumn(columnIndex, rowIndex);
  }
}
