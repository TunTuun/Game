import { createCell } from './create-cell';
import {
  fieldWidth,
  fieldHeight,
  playField
} from '../../const/const';

export const initCells = () => {
  let rowIndex = 1;
  let columnIndex = 1;
  for (let i = 0; i < fieldWidth * fieldHeight; i++) {
    const cell = createCell();
    cell.setAttribute('x', rowIndex);
    cell.setAttribute('y', columnIndex);
    playField.append(cell);
    if (rowIndex === fieldWidth) {
      rowIndex = 1;
      columnIndex++;
    } else {
      rowIndex++;
    }
  }
}
