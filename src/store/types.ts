import { combineReducers } from "@reduxjs/toolkit";
import textReducer from "./textSlice";

export type TextBoldState = ReturnType<typeof textReducer>;
export type TextItalicState = ReturnType<typeof textReducer>;
export type TextUnderlineState = ReturnType<typeof textReducer>;
export type TextSelectedState = ReturnType<typeof textReducer>;
export type TextLeftAlign = ReturnType<typeof textReducer>;
export type TextMiddleAlign = ReturnType<typeof textReducer>;
export type TextRightAlign = ReturnType<typeof textReducer>;

export interface RootState {
  textBold: TextBoldState;
  textItalic: TextItalicState;
  textUnderline: TextUnderlineState;
  textSelected: TextSelectedState;
  textLeftAlign: TextLeftAlign;
  textMiddleAlign: TextMiddleAlign;
  textRightAlign: TextRightAlign;
}

const rootReducer = combineReducers({
  textBold: textReducer,
  textItalic: textReducer,
  textUnderline: textReducer,
  textSelected: textReducer,
  textLeftAlign: textReducer,
  textMiddleAlign: textReducer,
  textRightAlign: textReducer,
});

export default rootReducer;
