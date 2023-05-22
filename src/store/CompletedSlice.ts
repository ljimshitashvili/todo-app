import { createSlice, Slice } from "@reduxjs/toolkit";
import { Task } from "./AllTaskSlice";

const CompletedSlice: Slice = createSlice({
  name: "CompletedSlice",
  initialState: { tasks: [] },
  reducers: {
    addCompletedTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    removeCompletedTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task: Task) => task.id !== action.payload
      );
    },
  },
});

export const { addCompletedTask, removeCompletedTask } = CompletedSlice.actions;
export default CompletedSlice.reducer;
