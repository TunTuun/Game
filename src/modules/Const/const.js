import { FieldStorage } from '../classes/field-storage';

// Размеры поля
export const fieldWidth = 8;
export const fieldHeight = 8;
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
  selectedStone: null
};
export const fieldStorage = new FieldStorage(fieldWidth, fieldHeight);
