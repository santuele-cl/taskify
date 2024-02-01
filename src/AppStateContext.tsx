import { createContext, useContext } from "react";
import { Task } from "./model";
import { useImmerReducer } from "use-immer";

interface InitialStateType {
  [activeTasks: string]: Task[];
  completedTasks: Task[];
}

type AppContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<Action>;
};

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
      payload: { id: number; from: string };
    }
  | {
      type: "toggle-task";
      payload: { id: number; from: string };
    }
  | {
      type: "move-task-within";
      payload: {
        id: number;
        destinationIndex: number;
        sourceIndex: number;
        sourceDroppable: string;
      };
    }
  | {
      type: "move-task-across";
      payload: {
        id: number;
        destinationIndex: number;
        sourceIndex: number;
        sourceDroppable: string;
        destinationDroppable: string;
      };
    };

const initialState = {
  activeTasks: [],
  completedTasks: [],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const Reducer = (draft: InitialStateType, action: Action) => {
  console.log("draft", draft);
  switch (action.type) {
    case "add-task": {
      const newTask: Task = {
        id: Date.now(),
        task: action.payload,
        isDone: false,
      };
      draft.activeTasks.push(newTask);
      break;
    }
    case "update-task": {
      const task = draft.activeTasks.find(
        (task) => task.id === action.payload.id
      );
      if (task) {
        task.task = action.payload.updatedTask;
      }
      break;
    }
    case "delete-task": {
      const { id, from } = action.payload;
      console.log(from);
      draft[from] = draft[from].filter((task) => task.id !== id);
      break;
    }
    case "toggle-task": {
      const { id, from } = action.payload;

      const foundTask = draft[from].find((task) => task.id === id);
      draft[from] = draft[from].filter((task) => task.id !== id);

      if (foundTask) {
        foundTask.isDone = !foundTask?.isDone;
        if (from === "activeTasks") {
          draft.completedTasks.push(foundTask);
        } else {
          draft.activeTasks.push(foundTask);
        }
      }

      break;
    }

    case "move-task-within": {
      const { destinationIndex, sourceIndex, id, sourceDroppable } =
        action.payload;

      const tasks = draft[sourceDroppable];

      const foundTask = tasks.find((task) => task.id === id);

      if (foundTask) {
        tasks.splice(sourceIndex, 1);
        tasks.splice(destinationIndex, 0, foundTask);
      }
      break;
    }
    case "move-task-across": {
      const {
        destinationIndex,
        sourceIndex,
        sourceDroppable,
        destinationDroppable,
      } = action.payload;

      // removed task
      const sourceTask = draft[sourceDroppable].splice(sourceIndex, 1)[0];
      sourceTask.isDone = !sourceTask.isDone;
      // place removed task to destination
      draft[destinationDroppable].splice(destinationIndex, 0, sourceTask);

      break;
    }
    default:
      break;
  }
};

export default function AppStateContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useImmerReducer(Reducer, initialState);
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
