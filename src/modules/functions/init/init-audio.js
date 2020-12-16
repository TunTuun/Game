export const initAudio = () => {
  const rand = 0.5 + Math.random() * 3;
  const backgroundMusic = Math.round(rand);
  const audio = new Audio();
  audio.src = './audio/background' + backgroundMusic + '.mp3';
  audio.volume = 0.1;
  audio.loop = true;
  audio.play();
}
