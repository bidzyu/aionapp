import Bunny from '../components/Bunny/Bunny.jsx';
import Text from '../components/Text/Text.jsx';
import Background from '../components/Background/Background.jsx';
import './Pages.css';
import { useSelector } from 'react-redux';
import GoScoreBtn from '../components/Buttons/GoScoreBtn.jsx';

const Main = () => {
  const started = useSelector((state) => state.start);

  return (
    <div className="page main-page">
      {started ? <GoScoreBtn /> : null}
      <Text />
      <Bunny />
      <Background name="main" />
    </div>
  );
};

export default Main;
