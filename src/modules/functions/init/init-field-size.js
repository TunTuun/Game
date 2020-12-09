import {
  fieldWidth,
  fieldHeight,
  playField
} from '../../const/const';

export const initFieldSize = () => {
  playField.style.flexBasis = (fieldWidth * 100) + 'px';
  playField.style.maxHeight = (fieldHeight * 100) + 'px';
}
