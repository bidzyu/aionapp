import './BunnyBye.scss';
import logo from '../../assets/ad-logo.png';
import ResultBtn from '../Buttons/ResultBtn';

const BunnyBye = () => {
  return (
    <div className="bunny-bye">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="bunny-container">
        <div className="grass"></div>
        <div className="bunny">
          <div className="bunny__ears">
            <div className="bunny__ear bunny__ear--left"></div>
            <div className="bunny__ear bunny__ear--right"></div>
          </div>
          <div className="bunny__feet">
            <div className="bunny__foot bunny__foot--left"></div>
            <div className="bunny__foot bunny__foot--right"></div>
          </div>
          <div className="bunny__tail"></div>
          <div className="bunny__paw"></div>
          <div className="bunny__body">
            <div className="bunny__eyes"></div>
            <div className="bunny__nose"></div>
            <div className="bunny__cheeks"></div>
            <div className="bunny__mouth"></div>
            <ResultBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunnyBye;
