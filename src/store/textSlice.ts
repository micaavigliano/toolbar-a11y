import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  },
  reducers: {
    toggleBold: (state) => {
      state.isBold = !state.isBold;
    },
    toggleItalic: (state) => {
      state.isItalic = !state.isItalic;
    },
    toggleUnderline: (state) => {
      state.isUnderline = !state.isUnderline;
    },
  },
});

export const { toggleBold, toggleItalic, toggleUnderline } = textSlice.actions;
export default textSlice.reducer;
