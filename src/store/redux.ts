import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./AllTaskSlice";

const store = configureStore({
  reducer: {
    task: TaskReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
