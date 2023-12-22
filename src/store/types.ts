import { combineReducers } from "@reduxjs/toolkit";
import textReducer from "./textSlice";

export type TextBoldState = ReturnType<typeof textReducer>;
export type TextItalicState = ReturnType<typeof textReducer>;
export type TextUnderlineState = ReturnType<typeof textReducer>;

export interface RootState {
  textBold: TextBoldState;
  textItalic: TextItalicState;
  textUnderline: TextUnderlineState;
}

const rootReducer = combineReducers({
  textBold: textReducer,
  textItalic: textReducer,
  textUnderline: textReducer,
});

export default rootReducer;
