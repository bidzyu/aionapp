import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuestionResult from './QuestionResult';

const ResultField = () => {
  const navigate = useNavigate();
  const started = useSelector((state) => state.start);

  if (!started) {
    navigate('/');
    return;
  }

  const questions = useSelector((state) => state.questions);
  const { questionsBlank, currQuestions } = questions;
  const resultQuestions = [];

  for (let i = 0; i < currQuestions.length; i++) {
    const currQuestion = currQuestions[i];
    const blankQuestion = questionsBlank[i];

    const params = {
      question: currQuestion.question,
      variants: currQuestion.variants,
      answer: currQuestion.answer,
      selected: blankQuestion.selected,
    };

    resultQuestions.push(
      <QuestionResult params={params} key={currQuestion.id} />
    );
  }

  return <div className="result-field">{resultQuestions}</div>;
};

export default ResultField;
