export class ConjuctionStack {
  constructor(fieldWidth, fieldHeight) {
    this.columnAmmount = fieldWidth;
    this.rowAmmount = fieldHeight;
    this.storage = [];
  }
  addConjuction(conjuction) {
    this.storage.push(conjuction);
  }
  resetStorage() {
    this.storage.length = 0;
  }
}
