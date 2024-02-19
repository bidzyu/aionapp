import { useNavigate } from 'react-router-dom';
import { PointsIcon } from '../Icons/PointsIcon';
import select from '../../assets/audio/select.mp3';
import playSound from '../../assets/playSound';

const GoScoreBtn = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    playSound(select);
    navigate('/score');
  };

  return (
    <button className="go-main-btn" onClick={clickHandler}>
      <PointsIcon />
    </button>
  );
};

export default GoScoreBtn;
