import { createSlice } from '@reduxjs/toolkit';
import questionsList from '../../assets/questionsList';

const initialState = {
  allQuestions: questionsList,
  currQuestions: null,
  currQuestionIndex: 0,
  questionsBlank: [],
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setDefault: () => {
      return initialState;
    },
    getSortedQuestionList: (state) => {
      let questions = [...state.allQuestions];
      const sortedQuestions = [];

      while (questions.length) {
        const question =
          questions[Math.floor(Math.random() * questions.length)];

        sortedQuestions.push(question);
        questions = questions.filter((q) => q !== question);
      }

      state.currQuestions = sortedQuestions;
    },
    increaseQuestionIndex: (state) => {
      state.currQuestionIndex = state.currQuestionIndex + 1;
    },
    addToBlank: (state, action) => {
      const { id, variant } = action.payload;

      state.questionsBlank.push({ id, selected: variant });
    },
  },
});

export const {
  setDefault,
  getSortedQuestionList,
  increaseQuestionIndex,
  addToBlank,
} = questionsSlice.actions;
export default questionsSlice.reducer;
