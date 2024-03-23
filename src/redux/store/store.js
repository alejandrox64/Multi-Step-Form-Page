import { configureStore } from "@reduxjs/toolkit";
import stepsReducer from "../reducers/stepsSlice";

export const store = configureStore({
  reducer: {
    steps: stepsReducer,
  },
});
