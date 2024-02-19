import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ResultField from '../components/Result/ResultField';
import Background from '../components/Background/Background';
import GoMainBtn from '../components/Buttons/GoMainBtn';

const Results = () => {
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
      <ResultField />
      <Background name="score" />
    </div>
  );
};

export default Results;
