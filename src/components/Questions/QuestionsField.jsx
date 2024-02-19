import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const QuestionsField = (props) => {
  const qState = useSelector((state) => state.questions);
  const { currQuestionIndex, currQuestions } = qState;
  const totalLength = currQuestions.length;
  const questions = props.questions;
  const navigate = useNavigate();

  useEffect(() => {
    if (currQuestionIndex >= totalLength) {
      navigate('/score');
    }
  }, [currQuestionIndex]);

  const getCounterVidget = () => {
    if (currQuestionIndex < totalLength) {
      return (
        <div>
          {currQuestionIndex + 1} из {totalLength}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="questions-field">
      {getCounterVidget()}
      {questions[currQuestionIndex]}
    </div>
  );
};

export default QuestionsField;
