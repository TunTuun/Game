export const forbideActions = () => {
  const playField = document.querySelector('.play-field');
  if (playField.style.pointerEvents === '') {
    playField.style.pointerEvents = 'none';
    console.log('Блокирую поле');
  } else {
    playField.style.pointerEvents = '';
    console.log('Разблокирую поле');
  }
}
