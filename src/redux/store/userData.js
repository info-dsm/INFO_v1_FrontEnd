import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
  name: "userData",
  initialState: {
    data: {
      name: "",
      email: "",
      file: [],
      modal: false,
    },
  },
  reducers: {
    userDataAction: (state, action) => {
      state.data = action.payload;
    },
    userModal: (state, action) => {
      state.data.modal = false;
    },
  },
});
export const { userDataAction, userModal } = userData.actions;
export default userData.reducer;
