import { FieldStorage } from '../classes/field-storage';

// Размеры поля
export const fieldWidth = 8;
export const fieldHeight = 8;
// Получение игрового поля из документа для последующей инициализации
export const playField = document.getElementsByClassName('play-field')[0];
// Количество типов камней (при изменении нужно добавить соответствующие стили в scss и класс Stone)
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
  selectedStone: undefined
};
export const fieldStorage = new FieldStorage(fieldWidth, fieldHeight);
