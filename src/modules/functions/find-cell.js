export const findCell = function (cordX, cordY) {
  const cellList = Array.from(document.getElementsByClassName('play-field__cell'));
  return cellList.find(element => (element.getAttribute('x') === cordX && element.getAttribute('y') === cordY))
}