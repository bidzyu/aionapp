import { ReactTyped } from 'react-typed';

const Text = () => {
  return (
    <div className="text">
      <h2>Привет!</h2>
      <p>
        Тут ты можешь проверить на сколько хорошо ты знаешь свою любимую игру.
      </p>
      <p className="type">
        У<ReactTyped strings={['дачи Aion Enjoyer :)']} typeSpeed={100} />
      </p>
    </div>
  );
};

export default Text;
