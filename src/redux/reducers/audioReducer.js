import { createSlice } from '@reduxjs/toolkit';
import coldly from '../../assets/audio/coldly.mp3';

const audioSlice = createSlice({
  name: 'audio',
  initialState: {
    audio: new Audio(coldly),
    isPlaying: false,
    canPlayEffect: true,
  },
  reducers: {
    toggleAudio: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setFalseEffect: (state) => {
      state.canPlayEffect = false;
    },
    setTrueEffect: (state) => {
      state.canPlayEffect = true;
    },
  },
});

export const { toggleAudio, setFalseEffect, setTrueEffect } =
  audioSlice.actions;
export default audioSlice.reducer;
