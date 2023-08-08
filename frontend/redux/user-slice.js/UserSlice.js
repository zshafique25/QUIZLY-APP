import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    value: ["This is me"],
  },
  reducers: {
    addUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = state.value.append(action.payload);
    },
    //   removeUser: (state) => {
    //     state.value = state.value.re
    //   },
    //   removeUserById: (state, action) => {
    //     state.value += action.payload
    //   },
  },
});

export const { addUser } = UserSlice.actions;

export default UserSlice.reducer;
