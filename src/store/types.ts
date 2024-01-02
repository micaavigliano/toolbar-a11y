import { combineReducers } from "@reduxjs/toolkit";
import textReducer from "./textSlice";

export type TextBoldState = ReturnType<typeof textReducer>;
export type TextItalicState = ReturnType<typeof textReducer>;
export type TextUnderlineState = ReturnType<typeof textReducer>;
export type TextSelectedState = ReturnType<typeof textReducer>

export interface RootState {
  textBold: TextBoldState;
  textItalic: TextItalicState;
  textUnderline: TextUnderlineState;
  textSelected: TextSelectedState
}

const rootReducer = combineReducers({
  textBold: textReducer,
  textItalic: textReducer,
  textUnderline: textReducer,
  textSelected: textReducer
});

export default rootReducer;
