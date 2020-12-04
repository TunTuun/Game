// Размеры поля
export const fieldWidth = 10;
export const fieldHeight = 10;
// Получение игрового поля из документа для последующей инициализации
export const playField = document.getElementsByClassName('play-field')[0];
// Количество типов камней (при изменении нужно добавить соответствующие стили в scss и класс Stone)
export const typeAmmount = 7;