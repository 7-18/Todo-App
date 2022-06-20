import { typesToDo } from "../types/types";

const initialState = {
  tasks: [],
};

export const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesToDo.add:
      return {
        tasks: [...state.tasks, action.payload],
      };
    case typesToDo.list:
      return {
        tasks: [...action.payload],
      };
    case typesToDo.edit:
      return {
        tasks: [...state.tasks],
      };
    case typesToDo.delete:
      return {
        tasks: state.tasks.filter((task) => task.title !== action.payload),
      };
    default:
      return state;
  }
};
