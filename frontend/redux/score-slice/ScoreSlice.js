import { createSlice } from "@reduxjs/toolkit";

export const ScoreSlice = createSlice({
  name: "score",
  initialState: {
    value: 0,
  },
  reducers: {
    addOneToScore: (state, action) => {
      // state.value += 1;
      state.value += 1;
    },
  },
});

export const { addOneToScore } = ScoreSlice.actions;

export default ScoreSlice.reducer;
