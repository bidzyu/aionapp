import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Wrong = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2500);
  }, []);

  return <div className="wrong">Oops, something going wrong...</div>;
};

export default Wrong;
