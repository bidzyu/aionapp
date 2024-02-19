import { useDispatch, useSelector } from 'react-redux';
import Background from '../components/Background/Background';
import { getSortedQuestionList } from '../redux/reducers/questionsReducer';
import Question from '../components/Questions/Question';
import QuestionsField from '../components/Questions/QuestionsField';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
  const isStarted = useSelector((state) => state.start);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isStarted) {
      navigate('/');
    }
  }, []);

  const { currQuestions } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  if (!currQuestions) {
    dispatch(getSortedQuestionList());
    return;
  }

  const questions = currQuestions.map((q) => (
    <Question key={q.id} question={q} />
  ));

  return (
    <div className="page">
      <QuestionsField questions={questions} />
      <Background name="questions" />
    </div>
  );
};

export default Questions;
