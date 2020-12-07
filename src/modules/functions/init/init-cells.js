export const initCells = function (playField, fieldWidth, fieldHeight) {
  const cellWidth = (100 / fieldWidth) + '%';
  let rowIndex = 1;
  let columnIndex = 1;
  while (true) {
    const cell = document.createElement('div');
    cell.classList.add('play-field__cell');
    cell.style.width = cellWidth;
    cell.setAttribute('x', rowIndex);
    cell.setAttribute('y', columnIndex);
    playField.append(cell);
    if (rowIndex === fieldWidth) {
      if (columnIndex === fieldHeight) {
        break;
      } else {
        rowIndex = 1;
        columnIndex++;
      }
    } else {
      rowIndex++;
    }
  }
}