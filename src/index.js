import { initFieldSize } from './modules/functions/init/init-field-size';
import { FieldStorage } from './modules/classes/field-storage';
import {
  fieldWidth,
  fieldHeight,
  playField
} from './modules/const/const';
import { initCells } from './modules/functions/init/init-cells';
import { initStones } from './modules/functions/init/init-stones';

initFieldSize(playField, fieldWidth, fieldHeight);
initCells(playField, fieldWidth, fieldHeight); // Инициализация игровых ячеек
const fieldStorage = new FieldStorage(fieldWidth, fieldHeight); // Инициализация пустого массива камней
initStones(fieldStorage); // Заполнение / Перезаполнение поля и массива камнями
