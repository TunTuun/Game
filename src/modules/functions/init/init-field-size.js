export const initFieldSize = function (playField, fieldWidth, fieldHeight) {
  playField.style.flexBasis = (fieldWidth * 100) + 'px';
  playField.style.maxHeight = (fieldHeight * 100) + 'px';
}