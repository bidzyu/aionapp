import { configureStore } from '@reduxjs/toolkit';
import audioReducer from '../reducers/audioReducer';
import questionsReducer from '../reducers/questionsReducer';
import startReducer from '../reducers/startReducer';

const store = configureStore({
  reducer: {
    questions: questionsReducer,
    audio: audioReducer,
    start: startReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
