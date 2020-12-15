export const unlockField = () => {
  const playField = document.querySelector('.play-field');
  if (playField.style.pointerEvents === 'none') {
    playField.style.pointerEvents = '';
  }
}
