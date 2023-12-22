import { combineReducers } from "@reduxjs/toolkit";
import textReducer from "./textSlice";

export type TextBoldState = ReturnType<typeof textReducer>;

export interface RootState {
  textBold: TextBoldState;
  // Add other slice states if any
}

const rootReducer = combineReducers({
  textBold: textReducer,
  // Add other reducers if any
});

export default rootReducer;
