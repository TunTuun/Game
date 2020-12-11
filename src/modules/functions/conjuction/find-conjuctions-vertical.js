import { field, fieldWidth, fieldHeight } from '../../const/const';
import { conjuctionStack } from '../../const/const';
import { Conjuction } from '../../classes/conjuction';

export const findConjuctionsVertical = () => {
  let columnIndex = 1;
  let rowIndex = 1;
  let previousStone;
  let conjuctionLength = 1;
  let conjuctionFlag = false;

  const pushConjuction = () => {
    const conjuctionType = field.findStone(columnIndex, rowIndex - 1)?.type;
    let cords = [];
    let endOfLine;
    if (rowIndex === fieldHeight && field.findStone(columnIndex, rowIndex).type === previousStone?.type) {
      endOfLine = 1;
    } else { endOfLine = 0; }

    for (let index = conjuctionLength; index > 0; index--) {
      cords.push([columnIndex, (rowIndex - index + endOfLine)]);
    }
    const conjuction = new Conjuction(conjuctionType, conjuctionLength, cords, false);
    conjuctionStack.addConjuction(conjuction);
  }

  const findPrevious = () => {
    if (rowIndex === 1) {
      previousStone = null;
    } else {
      previousStone = field.findStone(columnIndex, rowIndex - 1);
    }
  }

  const equalToPrevious = () => {
    if (field.findStone(columnIndex, rowIndex).type === previousStone?.type) {
      conjuctionLength++;
    }
    else {
      if (conjuctionFlag) {
        pushConjuction();
      }
      conjuctionFlag = false;
      conjuctionLength = 1;
    }
  }

  const conjuctionCheck = () => {
    if (conjuctionLength >= 3) {
      conjuctionFlag = true;
    } else {
      conjuctionFlag = false;
    }
  }

  const endOfLineCheck = () => {
    if (rowIndex === fieldHeight) {
      if (conjuctionFlag) {
        pushConjuction();
        conjuctionFlag = false;
      }
      rowIndex = 1;
      columnIndex++;
    }
    else {
      rowIndex++;
    }
  }

  const checkStone = (direction) => {
    findPrevious();
    equalToPrevious();
    conjuctionCheck();
    endOfLineCheck();
  }

  while (true) {
    if (rowIndex === fieldHeight && columnIndex === fieldWidth) {
      checkStone();
      console.log(conjuctionStack);
      break;
    }
    checkStone();
  }
}
