import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: {
    isBold: false,
    isItalic: false,
    isUnderline: false,
    isSelected: false,
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
    toggleSelected: (state, action: PayloadAction<boolean>) => {
      state.isSelected = action.payload;
    }
  },
});

export const { toggleBold, toggleItalic, toggleUnderline, toggleSelected } = textSlice.actions;
export default textSlice.reducer;
