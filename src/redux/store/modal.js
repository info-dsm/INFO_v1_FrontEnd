import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: { state: false },
  reducers: {
    stateModal: (state, action) => {
      state.state = action.payload;
    },
  },
});
export default modal.reducer;
