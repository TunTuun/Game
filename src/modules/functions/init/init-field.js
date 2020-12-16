import {
  fieldWidth,
  fieldHeight,
  playField,
  field
} from '../../const/const';
import { selectStone } from '../stone-functions/select-stone';
import { resetField } from './reset-field';
import { initAudio } from './init-audio';

export const initField = () => {
  document.querySelector('.game-wrapper').style.width = (fieldWidth * 100) + 4 + 'px';
  document.querySelector('.reset').addEventListener('click', (event) => resetField());
  document.querySelector('.record__value').textContent = localStorage.getItem('record');
  playField.style.width = (fieldWidth * 100) + 'px';
  playField.style.height = (fieldHeight * 100) + 'px';
  playField.addEventListener('click', (event) => {
    if (event.target.classList.contains('stone')) {
      const stoneData = field.findStone(event.target.parentNode.getAttribute('x'), event.target.parentNode.getAttribute('y'));
      selectStone(stoneData);
    }
  });

  document.querySelector('.game-wrapper').addEventListener('click', (event) => {
    initAudio();
  }, { once: true });
}
