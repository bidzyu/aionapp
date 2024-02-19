import { useNavigate } from 'react-router-dom';
import { MainIcon } from '../Icons/MainIcon';
import select from '../../assets/audio/select.mp3';
import playSound from '../../assets/playSound';

const GoMainBtn = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    playSound(select);
    navigate('/');
  };

  return (
    <button className="go-main-btn" onClick={clickHandler}>
      <MainIcon />
    </button>
  );
};

export default GoMainBtn;
