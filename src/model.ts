export const ACTIONS = {
  ADD_TASK: "add-task",
  DELETE_TASK: "delete-task",
  TOGGLE_TASK: "toggle-task",
};

export interface Task {
  id: number;
  task: string;
  isDone: boolean;
}
