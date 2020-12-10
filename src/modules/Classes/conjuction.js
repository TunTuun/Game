export class Conjuction {
  constructor(stoneType, lineSize, cords, horizontal) {
    this.type = stoneType;
    this.size = lineSize;
    this.cords = cords;
    horizontal === true ? this.direction = 'horizontal' : this.direction = 'vertical';
  }
}
