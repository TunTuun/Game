import {
  fieldWidth,
  fieldHeight,
  playField,
  field
} from '../../const/const';
import { selectStone } from '../stone-functions/select-stone';
import { resetField } from './reset-field';

export const initField = () => {
  document.querySelector('.game-wrapper').style.width = (fieldWidth * 100) + 4 + 'px';
  document.querySelector('.reset').addEventListener('click', (event) => resetField());
  document.querySelector('.record__value').textContent = localStorage.getItem('record');

  // Музик
  const audio = new Audio();
  audio.src = './audio/background1.mp3';
  audio.volume = 0.2;
  audio.loop = true;

  playField.style.width = (fieldWidth * 100) + 'px';
  playField.style.height = (fieldHeight * 100) + 'px';
  playField.addEventListener('click', (event) => {
    // Музик
    audio.play();

    if (event.target.classList.contains('stone')) {
      const stoneData = field.findStone(event.target.parentNode.getAttribute('x'), event.target.parentNode.getAttribute('y'));
      selectStone(stoneData);
    }
  });
  
  
}
