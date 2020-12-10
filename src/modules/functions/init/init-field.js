import {
  fieldWidth,
  fieldHeight,
  playField,
  field
} from '../../const/const';
import { selectStone } from '../stone-functions/select-stone';

export const initField = () => {
  playField.style.flexBasis = (fieldWidth * 100) + 'px';
  playField.style.maxHeight = (fieldHeight * 100) + 'px';
  playField.addEventListener('click', (event) => {
    if (event.target.classList.contains("stone")) {
      const stoneData = field.findStone(event.target.parentNode.getAttribute('x'), event.target.parentNode.getAttribute('y'));
      selectStone(stoneData);
    }
  });
}
