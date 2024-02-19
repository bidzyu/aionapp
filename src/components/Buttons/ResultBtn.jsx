import { Link } from 'react-router-dom';
import select from '../../assets/audio/select.mp3';
import playSound from '../../assets/playSound';
const ResultBtn = () => {
  const clickHandler = () => {
    playSound(select);
  };
  return (
    <Link to="/results" className="result-btn" onClick={clickHandler}>
      RESULT
    </Link>
  );
};

export default ResultBtn;
