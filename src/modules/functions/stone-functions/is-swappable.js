export const isSwappable = (firstStone, secondStone) => {
  if (firstStone.cordX === secondStone.cordX) {
    return (Math.abs(firstStone.cordY - secondStone.cordY) === 1);
  } else if (firstStone.cordY === secondStone.cordY) {
    return (Math.abs(firstStone.cordX - secondStone.cordX) === 1);
  } else {
    return false;
  }
}
