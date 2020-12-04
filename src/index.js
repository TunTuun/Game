"use strict"
import { fieldWidth, fieldHeight, playField } from './modules/Const/const';
import {FieldStorage} from './modules/Classes/FieldStorage';
import {initCells} from './modules/Functions/initCells';
import {initStones} from './modules/Functions/initStones';

initCells(playField, fieldWidth, fieldHeight); //Инициализация игровых ячеек
initStones(); //Заполнение поля камнями
