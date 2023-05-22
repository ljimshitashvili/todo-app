import { createSlice, Slice } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  task: string;
  isComplete: boolean;
}

interface AllTasksState {
  tasks: Task[];
  maxId: number;
}

const initialState: AllTasksState = {
  tasks: [],
  maxId: 0,
};

const allTaskSlice: Slice = createSlice({
  name: "AllTasks",
  initialState,
  reducers: {
    addTask: (state = initialState, action) => {
      state.tasks = [
        ...state.tasks,
        {
          id: state.maxId,
          task: action.payload,
          isComplete: false,
        },
      ];
      state.maxId++;
    },
    removeAll: (state) => {
      state.tasks = [];
    },
  },
});

export const { addTask, removeAll } = allTaskSlice.actions;
export default allTaskSlice.reducer;
