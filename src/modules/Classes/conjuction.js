export class Conjuction {
  constructor(stoneType, lineSize, cords, direction) {
    this.type = stoneType;
    this.size = lineSize;
    this.cords = cords;
    this.direction = direction === 'horizontal' ?  'horizontal' : 'vertical';
  }
}
