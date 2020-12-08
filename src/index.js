import { initFieldSize } from './modules/functions/init/init-field-size';
import {
  fieldWidth,
  fieldHeight,
  playField,
  fieldStorage
} from './modules/const/const';
import { initCells } from './modules/functions/init/init-cells';
import { initStones } from './modules/functions/init/init-stones';

initFieldSize(playField, fieldWidth, fieldHeight);
initCells(playField, fieldWidth, fieldHeight); // Инициализация игровых ячеек
initStones(fieldStorage); // Заполнение / Перезаполнение поля и массива камнями
