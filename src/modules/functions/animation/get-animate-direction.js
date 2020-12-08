export const getAnimateDirection = (firstCell, secondCell) => {
  const direction = firstCell.getAttribute('y') === secondCell.getAttribute('y') ? 'horizontal' : 'vertical';
  if (direction === 'horizontal') {
    if (firstCell.getAttribute('x') < secondCell.getAttribute('x')) {
      return 'moveRight';
    } else {
      return 'moveLeft';
    }
  } else {
    if (firstCell.getAttribute('y') < secondCell.getAttribute('y')) {
      return 'moveBottom';
    } else {
      return 'moveUp';
    }
  }
}
