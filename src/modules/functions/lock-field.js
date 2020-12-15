export const lockField = () => {
  const playField = document.querySelector('.play-field');
  if (playField.style.pointerEvents === '') {
    playField.style.pointerEvents = 'none';
  }
}
