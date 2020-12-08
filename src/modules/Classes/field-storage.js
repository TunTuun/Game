export class FieldStorage {
  constructor(fieldWidth, fieldHeight) {
    this.fieldWidth = fieldWidth;
    this.fieldHeight = fieldHeight;
    this.fieldStorage = [];
  }
  addStone(stone) {
    this.fieldStorage.push(stone);
  }
}
