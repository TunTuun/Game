export class FieldStorage {
  constructor(fieldWidth, fieldHeight) {
    this.fieldWidth = fieldWidth;
    this.fieldHeight = fieldHeight;
    this.fieldStorage = [];
  }
  addStone(stone) {
    this.fieldStorage.push(stone);
  }
  // findStone(cordX, cordY) {
  //   return this.fieldStorage.find(item => item.cordX === cordX && item.cordY === cordY);
  // }
}
