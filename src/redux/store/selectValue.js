import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: {
    main: "",
    sub: "",
    num: 0,
    duty: "",
    lang: [],
    stack: [],
  },
};
const selectValue = createSlice({
  name: "stack",
  initialState,
  reducers: {
    value: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { value } = selectValue.actions;
export default selectValue.reducer;
