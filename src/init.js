import { initFieldSize } from './modules/functions/init/init-field-size';
import {
  fieldWidth,
  fieldHeight,
  playField,
  fieldStorage
} from './modules/const/const';
import { initCells } from './modules/functions/init/init-cells';
import { initStones } from './modules/functions/init/init-stones';

initFieldSize();
initCells(); // Инициализация игровых ячеек
initStones(); // Заполнение / Перезаполнение поля и массива камнями

stone.addEventListener('click', () => { moveStones(stoneData) }); // Переделать на делегировании