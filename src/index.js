"use strict"
import { FieldStorage } from './modules/Classes/FieldStorage';
import { fieldWidth, fieldHeight, playField } from './modules/Const/const';
import { initCells } from './modules/Functions/initCells';
import { initStones } from './modules/Functions/initStones';

initCells(playField, fieldWidth, fieldHeight); // Инициализация игровых ячеек
let fieldStorage = new FieldStorage(fieldWidth, fieldHeight); // Инициализация пустого массива камней
initStones(fieldStorage); // Заполнение/Перезаполнение поля и массива камнями