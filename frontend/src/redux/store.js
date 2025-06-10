import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./goalSlice";

export const store = configureStore({
  reducer: {
    goals: goalsReducer,
  },
});
