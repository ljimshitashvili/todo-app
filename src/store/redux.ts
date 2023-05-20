import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./AllTaskSlice";

const store = configureStore({
  reducer: {
    name: TaskReducer,
  },
});

export default store;
