import { field, fieldWidth, fieldHeight } from '../../const/const';
import { conjuctionStack } from '../../const/const';
import { Conjuction } from '../../classes/conjuction';

export const findConjuctions = () => {

  const pushConjuction = (mainAxis, crossAxis, axisSize, direction) => {
    let conjuction;
    const conjuctionType = previousStone?.type;
    let cords = [];
    let endOfLine;
    if (mainAxis === axisSize && field.findStone(columnIndex, rowIndex).type === previousStone?.type) {
      endOfLine = 1;
    } else { endOfLine = 0; }

    for (let index = conjuctionLength; index > 0; index--) {
      if (direction === 'horizontal') {
        cords.push([(mainAxis - index + endOfLine), crossAxis]);
      } else {
        cords.push([crossAxis, (mainAxis - index + endOfLine)]);
      }
    }

    if (direction === 'horizontal') {
      conjuction = new Conjuction(conjuctionType, conjuctionLength, cords, true);
    } else {
      conjuction = new Conjuction(conjuctionType, conjuctionLength, cords, false);
    }
    conjuctionStack.addConjuction(conjuction);
  }

  const findPrevious = (mainAxis, crossAxis) => {
    if (mainAxis === 1) {
      previousStone = null;
    } else {
      previousStone = field.findStone(mainAxis - 1, crossAxis);
    }
  }

  const equalToPrevious = (direction) => {
    if (field.findStone(columnIndex, rowIndex).type === previousStone?.type) {
      conjuctionLength++;
    } else {
      if (conjuctionFlag) {
        if (direction === 'horizontal') {
          pushConjuction(columnIndex, rowIndex, fieldWidth, direction);
        } else {
          pushConjuction(rowIndex, columnIndex, fieldHeight, direction);
        }
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

  const endOfLineCheck = (mainAxis, axisSize, direction) => {
    if (mainAxis === axisSize) {
      if (conjuctionFlag) {
        if (direction === 'horizontal') {
          pushConjuction(columnIndex, rowIndex);
        } else {
          pushConjuction(rowIndex, columnIndex);
        }
        conjuctionFlag = false;
      }
      if (direction === 'horizontal') {
        columnIndex = 1;
        rowIndex++;
      } else {
        rowIndex = 1;
        columnIndex++;
      }
    }
    else {
      if (direction === 'horizontal') {
        columnIndex++;
      } else {
        rowIndex++;
      }
    }
  }

  const checkStone = (direction) => {
    if (direction === 'horizontal') {
      findPrevious(columnIndex, rowIndex);
      equalToPrevious(direction);
      conjuctionCheck();
      endOfLineCheck(columnIndex, fieldWidth, direction);
    } else {
      findPrevious(rowIndex, columnIndex);
      equalToPrevious(direction);
      conjuctionCheck();
      endOfLineCheck(rowIndex, fieldHeight, direction);
    }
  }
  
  let columnIndex = 1;
  let rowIndex = 1;
  let previousStone;
  let conjuctionLength = 1;
  let conjuctionFlag = false;

  while (true) {
    if (rowIndex === fieldHeight && columnIndex === fieldWidth) {
      checkStone('horizontal');
      console.log(conjuctionStack); //
      break;
    }
    checkStone('horizontal');
  }

  columnIndex = 1;
  rowIndex = 1;
  previousStone;
  conjuctionLength = 1;
  conjuctionFlag = false;

  while (true) {
    if (rowIndex === fieldHeight && columnIndex === fieldWidth) {
      checkStone('vertical');
      console.log(conjuctionStack); //
      break;
    }
    checkStone('vertical');
  }
}
