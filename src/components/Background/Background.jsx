import mainBg from '../../assets/bg/main-bg.jpg';
import questionsBg from '../../assets/bg/questions-bg.jpg';
import scoreBg from '../../assets/bg/score-bg.jpg';

const Background = (props) => {
  const name = props.name;

  let bg = mainBg;

  switch (name) {
    case 'main':
      bg = mainBg;
      break;

    case 'questions':
      bg = questionsBg;
      break;

    case 'score':
      bg = scoreBg;
      break;
  }

  return (
    <div className="bg">
      <img src={bg} alt="" />
    </div>
  );
};

export default Background;
