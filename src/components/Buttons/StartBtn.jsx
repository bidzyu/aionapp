import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setStart } from '../../redux/reducers/startReducer';
import { setDefault } from '../../redux/reducers/questionsReducer';
import banch from '../../assets/audio/banch.mp3';
import playSound from '../../assets/playSound';
import { setTrueEffect } from '../../redux/reducers/audioReducer';
import { useEffect } from 'react';
import { useState } from 'react';
const StartBtn = () => {
  const started = useSelector((state) => state.start);
  const dispatch = useDispatch();

  const clickHandler = () => {
    playSound(banch);

    if (!started) {
      dispatch(setStart());
      return;
    }

    dispatch(setDefault());
    setTimeout(() => dispatch(setTrueEffect()));
  };

  return (
    <Link to="/questions" className="start-btn" onClick={clickHandler}>
      START
    </Link>
  );
};

export default StartBtn;
