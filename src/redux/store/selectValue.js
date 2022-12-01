import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bigClassification: "",
  smallClassification: "",
  numberOfEmployee: 0,
  detailBusinessDescription: "",
  gradeCutLine: 0,
  needCertificateList: [],
  languageList: [],
  technologyList: [],
};
const selectValue = createSlice({
  name: "stack",
  initialState,
  reducers: {
    value: (state, action) => {
      state.recruitmentRequest = action.payload;
    },
  },
});
export const { value } = selectValue.actions;
export default selectValue.reducer;
