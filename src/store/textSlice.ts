import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: {
    isBold: false,
  },
  reducers: {
    toggleBold: (state) => {
      state.isBold = !state.isBold;
    },
  },
});

export const { toggleBold } = textSlice.actions;
export default textSlice.reducer;
