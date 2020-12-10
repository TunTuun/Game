export class Field {
  constructor(fieldWidth, fieldHeight) {
    this.width = fieldWidth;
    this.height = fieldHeight;
    this.storage = [];
  }
  addStone(stone) {
    this.storage.push(stone);
  }
  findStone(cordX, cordY) {
    return this.storage.find(item => item.cordX === cordX && item.cordY === cordY);
  }
}
