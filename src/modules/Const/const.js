import { ConjuctionStack } from '../classes/conjuction-stack';
import { Field } from '../classes/field-storage';

// Размеры поля
export const fieldWidth = 5;
export const fieldHeight = 5;
// Получение игрового поля из документа для инициализации
export const playField = document.querySelector('.play-field');
// Количество типов камней (при изменении нужно добавить соответствующие стили в scss и массив stoneColors)
export const typeAmmount = 7;
// Цвета камней
export const stoneColors = [
  'crimson',
  'limegreen',
  'orange',
  'turquoise',
  'blue',
  'violet',
  'sienna',
];
// Игровой обработчик событий
export const gameplayHandler = {
  isSelectedFlag: false,
  selectedStone: null,
  score: 0,
};
export const field = new Field(fieldWidth, fieldHeight);
export const conjuctionStack = new ConjuctionStack(fieldWidth, fieldHeight);
