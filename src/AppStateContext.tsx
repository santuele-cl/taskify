import { createContext, useContext, useReducer } from "react";
import { Task } from "./model";

export type Action =
  | {
      type: "add-task";
      payload: string;
    }
  | {
      type: "update-task";
      payload: { id: number; updatedTask: string };
    }
  | {
      type: "delete-task";
      payload: number;
    }
  | {
      type: "toggle-task";
      payload: number;
    };

const initialState = {
  tasks: [],
};
type AppContextType = {
  state: { tasks: Task[] };
  dispatch: React.Dispatch<Action>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const Reducer = (state: { tasks: Task[] }, action: Action) => {
  switch (action.type) {
    case "add-task":
      return {
        tasks: [
          ...state.tasks,
          { id: Date.now(), task: action.payload, isDone: false },
        ],
      };

    case "update-task":
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, task: action.payload.updatedTask };
          }
          return task;
        }),
      };
    case "delete-task":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "toggle-task":
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, isDone: !task.isDone };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

export default function AppStateContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
