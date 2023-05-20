import { createSlice } from "@reduxjs/toolkit";

interface TaskTypes {
  name: string;
  actions?: any;
}

const allTaskSlice: TaskTypes = createSlice({
  name: "AllTasks",
  initialState: {
    id: 0,
    task: "",
    isComplete: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.id = state.id + 1;
      [...state.task, action.payload];
      state.isComplete = false;
    },
    removeAll: (state) => {
      state.task = "";
    },
  },
});

export const { addTask, removeAll } = allTaskSlice.actions;

export default allTaskSlice.reducer;
