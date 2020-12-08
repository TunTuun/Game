import { getAnimateDirection } from './get-animate-direction';
import { stoneAnimation } from './stone-animation';

export const animationInit = (firstCell, secondCell, returnStones) => {
  const animateDirection = getAnimateDirection(firstCell, secondCell);
  let firstStoneStyle;
  let secondStoneStyle;
  switch (animateDirection) {
    case 'moveRight':
      firstStoneStyle = 'left';
      secondStoneStyle = 'right';
      stoneAnimation(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);
      break;
    case 'moveLeft':
      firstStoneStyle = 'right';
      secondStoneStyle = 'left';
      stoneAnimation(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);
      break;
    case 'moveBottom':
      firstStoneStyle = 'top';
      secondStoneStyle = 'bottom';
      stoneAnimation(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);
      break;
    case 'moveUp':
      firstStoneStyle = 'bottom';
      secondStoneStyle = 'top';
      stoneAnimation(firstCell, secondCell, firstStoneStyle, secondStoneStyle, returnStones);
      break;
  }
}
