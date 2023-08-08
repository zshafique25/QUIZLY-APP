import { createSlice } from "@reduxjs/toolkit";

export const SubjectSlice = createSlice({
  name: "subject",
  initialState: {
    value: [],
  },
  reducers: {
    addSubject: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   console.log(action);
      //   console.log("I am hit");
      //   console.log(action.payload);
      state.value.push(action.payload);
    },
    //   removeUser: (state) => {
    //     state.value = state.value.re
    //   },
    //   removeUserById: (state, action) => {
    //     state.value += action.payload
    //   },
  },
});

export const { addSubject } = SubjectSlice.actions;

export default SubjectSlice.reducer;
