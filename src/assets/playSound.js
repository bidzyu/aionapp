const playSound = (sound) => {
  const a = new Audio(sound);
  a.volume = 0.3;
  a.play();
};

export default playSound;
