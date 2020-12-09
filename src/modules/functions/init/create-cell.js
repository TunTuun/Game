import { fieldWidth } from '../../const/const';

export const createCell = () => {
  const cellWidth = (100 / fieldWidth) + '%';
  const cell = document.createElement('div');
  cell.classList.add('play-field__cell');
  cell.style.width = cellWidth;
  return cell;
}
