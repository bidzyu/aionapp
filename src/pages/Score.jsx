import Background from '../components/Background/Background';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ScoreField from '../components/Score/ScoreField';
import GoMainBtn from '../components/Buttons/GoMainBtn';

const Score = () => {
  const isStarted = useSelector((state) => state.start);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isStarted) {
      navigate('/');
    }
  }, []);

  return (
    <div className="page">
      <GoMainBtn />
      <ScoreField />
      <Background name="score" />
    </div>
  );
};

export default Score;
