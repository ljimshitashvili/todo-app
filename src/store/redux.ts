import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./AllTaskSlice";
import CompletedSlice from "./CompletedSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    task: TaskReducer,
    complete: CompletedSlice,
  },
  middleware: [thunk],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
