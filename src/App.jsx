import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main.jsx';
import Questions from './pages/Questions.jsx';
import Score from './pages/Score.jsx';
import Results from './pages/Results.jsx';
import Wrong from './pages/Wrong.jsx';
import AudioPlayer from './Audio/AudioPlayer.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <AudioPlayer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/score" element={<Score />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Wrong />} />
      </Routes>
    </Router>
  );
};

export default App;
