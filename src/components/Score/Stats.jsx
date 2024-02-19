import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import playSound from '../../assets/playSound';
import win from '../../assets/audio/win.mp3';
import lose from '../../assets/audio/lose.mp3';
import { setFalseEffect } from '../../redux/reducers/audioReducer';
import { useEffect } from 'react';

const Stats = () => {
  const questions = useSelector((state) => state.questions);
  const started = useSelector((state) => state.start);
  const canPlayEffect = useSelector((state) => state.audio.canPlayEffect);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!started) {
    navigate('/');
    return;
  }

  const { questionsBlank, currQuestions } = questions;

  const total = currQuestions.length;
  let correct = 0;
  let loreTotal = 0;
  let loreCorrect = 0;
  let gameTotal = 0;
  let gameCorrect = 0;

  for (let i = 0; i < questionsBlank.length; i++) {
    const currQuestion = currQuestions[i];
    const blankQuestion = questionsBlank[i];

    if (currQuestion.id !== blankQuestion.id) {
      console.log('WRONG ID!');
      return;
    }

    if (currQuestion.type === 'lor') {
      loreTotal++;
    } else if (currQuestion.type === 'game') {
      gameTotal++;
    }

    if (currQuestion.answer === blankQuestion.selected) {
      correct++;

      if (currQuestion.type === 'lor') {
        loreCorrect++;
      } else if (currQuestion.type === 'game') {
        gameCorrect++;
      }
    }
  }

  const lorePrecent = Math.round((100 / loreTotal) * loreCorrect);
  const gamePercent = Math.round((100 / gameTotal) * gameCorrect);

  useEffect(() => {
    if (canPlayEffect) {
      dispatch(setFalseEffect());

      if (total / 2 <= correct) {
        playSound(win);
      } else {
        playSound(lose);
      }
    }
  }, []);

  return (
    <div className="stats">
      <div>
        <span>Правильных ответов:</span> <br /> {correct} из {total}
      </div>
      {isFinite(lorePrecent) ? (
        <div>
          <span>Лор и сюжет:</span> <br /> {lorePrecent}%
        </div>
      ) : null}
      {isFinite(gamePercent) ? (
        <div>
          <span>Игровые моменты:</span> <br /> {gamePercent}%
        </div>
      ) : null}
    </div>
  );
};

export default Stats;
