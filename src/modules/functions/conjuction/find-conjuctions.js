import { field, fieldWidth, fieldHeight } from '../../const/const';
import { conjuctionStack } from '../../const/const';
import { Conjuction } from '../../classes/conjuction';

export const findConjuctions = () => {
  let columnIndex = 1; // x
  let rowIndex = 1; // y
  let previousStone;
  while (true) {
    if (rowIndex === fieldHeight) { // Текущий по ряду - это конец?
      if (columnIndex === fieldWidth) {
        find(columnIndex, rowIndex);
        break;
      }
      find(columnIndex, rowIndex);
    } else {
      find(columnIndex, rowIndex);
    }
  }

  const find = (x, y) => {
    if (x === 1) {
      previousStone = null;
    } else {
      previousStone = field.storage[fieldWidth * (y - 1) + (x - 1)]
    }
  }

  // let rowFlag = false;
  // let rowIndex = 0; // y
  // let columnIndex = 0; // x
  // let previousStone;
  // let conjuctionLength = 1;
  // let conjuctionType;
  // let conjuctionFlag = false;
  // while (true) {
  //   console.log('Следующий камень в ряду'); //
  //   previousStone = field.storage[fieldWidth * rowIndex + columnIndex - 1];
  //   if (field.storage[fieldWidth * rowIndex + columnIndex].type === previousStone?.type) {
  //     console.log("Текущий тип:");
  //     console.log(field.storage[fieldWidth * rowIndex + columnIndex]);
  //     console.log("Предыдущий тип:");
  //     console.log(previousStone);
  //     console.log('Тип текущего камня совпал с типом предыдущего камня'); //
  //     conjuctionLength++;
  //     console.log('Длина совпадения увеличена на 1 и сейчас равна:'); //
  //     console.log(conjuctionLength);
  //     conjuctionType = field.storage[fieldWidth * rowIndex + columnIndex].type;
  //     console.log('Тип совпадения изменен на:'); //
  //     console.log(field.storage[fieldWidth * rowIndex + columnIndex].type); //
  //   } else {
  //     console.log('Тип текущего камня НЕ совпал с типом предыдущего камня'); //
  //     conjuctionLength = 1;
  //     console.log('Длина совпадений = 1'); //
  //     if (conjuctionFlag === true) {
  //       console.log('Имелось совпадение и оно закончилось, нужно добавить'); //
  //       let cords = [];
  //       for (let index = conjuctionLength; index > 0; index--) {
  //         cords.push(columnIndex, rowIndex);
  //       }
  //       console.log('Координаты совпадения найдены:'); //
  //       console.log(cords); //
  //       const conjuction = new Conjuction(conjuctionType, conjuctionLength, cords, true);
  //       conjuctionStack.addConjuction(conjuction);
  //       console.log('Совпадение:'); //
  //       console.log(conjuction); //
  //     }
  //   }
  //   if (conjuctionLength >= 3) {
  //     console.log('Ряд из камней равен 3 и более, поднимаем флаг совпадения'); //
  //     conjuctionFlag = true;
  //   }
  //   if (columnIndex === 0) {
  //     previousStone = null;
  //   } else {
  //     previousStone = field.storage[fieldWidth * rowIndex + columnIndex - 1];
  //   }
  //   console.log('Текущий камень:');
  //   console.log(field.storage[fieldWidth * rowIndex + columnIndex]);
  //   console.log('Предыдущий камень текущего камня:'); //
  //   console.log(previousStone); //
  //   columnIndex++;
  //   console.log('Переходим на следующий камень в ряду...'); //
  //   console.log(''); //

  //   if (columnIndex === fieldWidth - 1) {
  //     console.log('Это последний камень в ряду'); //
  //     if (conjuctionFlag === true) {
  //       console.log('Совпадение в 3 и более камней, сработал флаг conjuctionFlag'); //
  //       let cords = [];
  //       for (let index = conjuctionLength; index > 0; index--) {
  //         cords.push(columnIndex, rowIndex);
  //       }
  //       const conjuction = new Conjuction(conjuctionType, conjuctionLength, cords, true);
  //       console.log('Совпадение:'); //
  //       console.log(conjuction); //
  //       conjuctionStack.addConjuction(conjuction);
  //       console.log('Совпадение добавлено в стек'); //
  //     }
  //     columnIndex = 0;
  //     console.log('Индекс по X выставлен в 0 для начала следующей строки'); //
  //     previousStone = null;
  //     console.log('Предыдущий камень обнулен, у первого камня в ряду нет предыдущего камня'); //
  //     if (rowIndex === fieldHeight - 1) {
  //       console.log('Последний камень в последней колонке обработан, завершаем цикл'); //
  //       break;
  //     } else {
  //       console.log('Следующий ряд...'); //
  //       console.log('')
  //       rowIndex++;
  //     }
  //   }
  // }
  // console.log(conjuctionStack);
}
