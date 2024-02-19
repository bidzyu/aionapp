const QuestionResult = (props) => {
  const { question, variants, answer, selected } = props.params;

  return (
    <div className="question-result">
      <div className="quest-result">{question}</div>
      <div className="score-field variants-result">
        {variants.map((v) => {
          if (v === answer && v === selected) {
            return (
              <div className="correct-result" key={v}>
                {v}
              </div>
            );
          } else if (v === answer) {
            return (
              <div className="correct-result" key={v}>
                {v}
              </div>
            );
          } else if (v === selected) {
            return (
              <div className="wrong-result" key={v}>
                {v}
              </div>
            );
          } else {
            return <div key={v}>{v}</div>;
          }
        })}
      </div>
    </div>
  );
};

export default QuestionResult;
