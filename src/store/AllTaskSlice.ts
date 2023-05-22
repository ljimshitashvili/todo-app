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
    changeCompletion: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex(
        (task: Task) => task.id === taskId
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex].isComplete = !state.tasks[taskIndex].isComplete;
      }
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task: Task) => task.id !== action.payload
      );
    },
  },
});

export const { addTask, removeAll, changeCompletion, removeTask } =
  allTaskSlice.actions;
export default allTaskSlice.reducer;
