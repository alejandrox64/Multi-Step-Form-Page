import { configureStore } from "@reduxjs/toolkit";
import stepsReducer from "../reducers/stepsSlice";
import plansReducer from "../reducers/plansSlice";

export const store = configureStore({
  reducer: {
    steps: stepsReducer,
    plans: plansReducer,
  },
});
