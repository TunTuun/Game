export const forbideActions = () => {
  const playField = document.querySelector('.play-field');
  if (playField.style.pointerEvents === '') {
    playField.style.pointerEvents = 'none';
  } else {
    playField.style.pointerEvents = '';
  }
}
