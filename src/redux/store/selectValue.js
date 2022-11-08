import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [
    {
      main: "",
      sub: "",
      num: "",
      duty: "",
      grade: 0,
      lang: [],
      stack: [],
      cert: [],
    },
  ],
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
