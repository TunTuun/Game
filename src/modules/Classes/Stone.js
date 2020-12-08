import {
  typeAmmount,
  stoneColors
} from '../const/const';

export class Stone {
  constructor(cordX, cordY) {
    this.cordX = cordX;
    this.cordY = cordY;
    this.type = this.randomiseType();
    this.selected = false;
  }
  randomiseType() {
    const type = Math.floor(1 + Math.random() * (typeAmmount));
    if (stoneColors.length < (typeAmmount - 1)) {
      return 'Undefined type of stone';
    } else {
      return stoneColors[type - 1];
    }
  }
}
