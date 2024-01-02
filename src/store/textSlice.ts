import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "text",
  initialState: {
    isBold: false,
    isItalic: false,
    isUnderline: false,
    isSelected: false,
    isLeft: false,
    isMiddle: false,
    isRight: false,
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
    },
    toggleLeft: (state) => {
      state.isLeft = !state.isLeft;
      state.isMiddle = false;
      state.isRight = false;
    },
    toggleMiddle: (state) => {
      state.isMiddle = !state.isMiddle;
      state.isRight = false;
      state.isLeft = false;
    },
    toggleRight: (state) => {
      state.isRight = !state.isRight;
      state.isMiddle = false;
      state.isLeft = false;
    },
  },
});

export const {
  toggleBold,
  toggleItalic,
  toggleUnderline,
  toggleLeft,
  toggleMiddle,
  toggleRight,
  toggleSelected,
} = textSlice.actions;
export default textSlice.reducer;
