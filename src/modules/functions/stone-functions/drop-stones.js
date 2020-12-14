import { field, fieldHeight, fieldWidth } from '../../const/const';
import { dropAnimation } from '../animation/drop-animation';

export const dropStones = () => {
  // let dropIndex = fieldHeight - 1;
  // const columnCheck = (columnIndex, dropIndex) => { 
  //   console.log(dropIndex)
  //   if (dropIndex > 1) {
  //     if (field.findStone(columnIndex, dropIndex + 1)) {
  //       console.log('Камень под низом есть, двигаемся вверх');
  //       columnCheck(columnIndex, dropIndex - 1);
  //     } else {
  //       if (field.findStone(columnIndex, dropIndex)) {
  //         console.log('Существует, роняем');
  //         field.dropStone(columnIndex, dropIndex);
  //         dropAnimation(columnIndex, dropIndex);
  //         console.log('Вызываем функцию прохода еще раз');
  //         columnCheck(columnIndex, fieldHeight - 1);
  //       } else {
  //         console.log('Пустота, нужно искать и ронять верхний');
  //         columnCheck(columnIndex, dropindex--);
  //       }
  //     }
  //   } 
  // }
  // for (let columnIndex = 1; columnIndex <= fieldWidth; columnIndex++) {
  //   columnCheck(columnIndex, dropIndex);
  //   console.log('columnIndex: ', columnIndex);
  // }
}
