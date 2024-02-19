import { useSelector, useDispatch } from 'react-redux';
import { toggleAudio } from '../redux/reducers/audioReducer';
import { SoundOn, SoundOff } from '../components/Icons/AudioIcon.jsx';

const AudioPlayer = () => {
  const audioState = useSelector((state) => state.audio);
  const dispatch = useDispatch();
  const { audio, isPlaying } = audioState;
  audio.volume = 0.1;
  audio.loop = true;

  if (!isPlaying) {
    audio.play();
  } else {
    audio.pause();
  }

  return (
    <button className="audio-btn" onClick={() => dispatch(toggleAudio())}>
      {isPlaying ? <SoundOff /> : <SoundOn />}
    </button>
  );
};

export default AudioPlayer;
