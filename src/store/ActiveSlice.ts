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

const ActiveSlice: Slice = createSlice({
  name: "ActiveSlice",
  initialState,
  reducers: {
    addActiveTask: (state = initialState, action) => {
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
    removeActiveTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task: Task) => task.id !== action.payload
      );
    },
  },
});

export const { addActiveTask, removeActiveTask } = ActiveSlice.actions;
export default ActiveSlice.reducer;
