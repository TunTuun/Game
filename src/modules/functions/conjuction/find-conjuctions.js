import { field, fieldWidth, fieldHeight } from '../../const/const';
import { conjuctionStack } from '../../const/const';
import { Conjuction } from '../../classes/conjuction';

export const findConjuctions = () => {
  let columnIndex = 1;
  let rowIndex = 1;
  let previousStone;
  let conjuctionLength = 1;
  let conjuctionFlag = false;

  const pushConjuction = (mainAxis, crossAxis, axisSize, direction) => {
    let conjuction;
    const conjuctionType = previousStone?.type;
    let cords = [];
    let endOfLine;

    if (direction === 'horizontal') {
      if (mainAxis === axisSize && field.findStone(mainAxis, crossAxis).type === previousStone?.type) {
        endOfLine = 1;
      } else { endOfLine = 0; }
    }
    else {
      if (mainAxis === axisSize && field.findStone(crossAxis, mainAxis).type === previousStone?.type) {
        endOfLine = 1;
      } else { endOfLine = 0; }
    }

    for (let index = conjuctionLength; index > 0; index--) {
      if (direction === 'horizontal') {
        cords.push([(mainAxis - index + endOfLine), crossAxis]);
      } else {
        cords.push([crossAxis, (mainAxis - index + endOfLine)]);
      }
    }

    if (direction === 'horizontal') {
      conjuction = new Conjuction(conjuctionType, conjuctionLength, cords, 'horizontal');
    } else {
      conjuction = new Conjuction(conjuctionType, conjuctionLength, cords, 'vertical');
    }
    conjuctionStack.addConjuction(conjuction);
  }

  const findPrevious = (mainAxis, crossAxis, direction) => {
    if (mainAxis === 1) {
      previousStone = null;
    } else {
      if (direction === 'horizontal') {
        previousStone = field.findStone(mainAxis - 1, crossAxis);
      }
      else {
        previousStone = field.findStone(crossAxis, mainAxis - 1);
      }
    }
  }

  const equalToPrevious = (mainAxis, crossAxis, direction) => {
    let currentStone;
    direction === 'horizontal' ? currentStone = field.findStone(mainAxis, crossAxis) : currentStone = field.findStone(crossAxis, mainAxis);
    if (currentStone.type === previousStone?.type) {
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
          pushConjuction(columnIndex, rowIndex, fieldWidth, direction);
        } else {
          pushConjuction(rowIndex, columnIndex, fieldHeight, direction);
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

  const resetVariables = () => {
    columnIndex = 1;
    rowIndex = 1;
    previousStone;
    conjuctionLength = 1;
    conjuctionFlag = false;
  }

  const checkStone = (direction) => {
    if (direction === 'horizontal') {
      findPrevious(columnIndex, rowIndex, direction);
      equalToPrevious(columnIndex, rowIndex, direction);
      conjuctionCheck();
      endOfLineCheck(columnIndex, fieldWidth, direction);
    } else {
      findPrevious(rowIndex, columnIndex, direction);
      equalToPrevious(rowIndex, columnIndex, direction);
      conjuctionCheck();
      endOfLineCheck(rowIndex, fieldHeight, direction);
    }
  }

  while (true) {
    if (rowIndex === fieldHeight && columnIndex === fieldWidth) {
      checkStone('horizontal');
      break;
    }
    checkStone('horizontal');
  }

  resetVariables();

  while (true) {
    if (rowIndex === fieldHeight && columnIndex === fieldWidth) {
      checkStone('vertical');
      break;
    }
    checkStone('vertical');
  }
}
