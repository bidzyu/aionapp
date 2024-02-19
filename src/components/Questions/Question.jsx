import { useDispatch } from 'react-redux';
import {
  addToBlank,
  increaseQuestionIndex,
} from '../../redux/reducers/questionsReducer';
import playSound from '../../assets/playSound';
import sound from '../../assets/audio/click.mp3';

const Question = (props) => {
  const { id, question, variants, answer, type } = props.question;
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const target = e.target;
    const id = +target.id;
    const variant = target.getAttribute('variant');

    if (!id || !variant) return;

    playSound(sound);
    dispatch(addToBlank({ id, variant }));
    dispatch(increaseQuestionIndex());
  };

  return (
    <div className="question">
      <p className="question-type">
        {type === 'lor' ? <>Лор и сюжет</> : <>Игровые моменты</>}
      </p>
      <p className="question-question">{question}</p>
      <div className="grid-variants">
        {variants.map((v, i) => (
          <div
            onClick={clickHandler}
            className="variant"
            key={v}
            variant={v}
            id={id}
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
