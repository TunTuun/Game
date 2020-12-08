export const forbideActions = () => {
  const playField = document.getElementsByClassName('play-field')[0];
  if (playField.style.pointerEvents === '') {
    playField.style.pointerEvents = 'none';
  } else {
    playField.style.pointerEvents = '';
  }
}
