import { createSlice } from '@reduxjs/toolkit';

const startSlice = createSlice({
  name: 'start',
  initialState: false,
  reducers: {
    setStart: () => {
      return true;
    },
  },
});

export const { setStart } = startSlice.actions;
export default startSlice.reducer;
