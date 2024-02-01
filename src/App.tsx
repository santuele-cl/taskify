import { Box, Container } from "@mui/material";
import "./App.css";
import Home from "./pages/home/Home";
import { useAppContext } from "./AppStateContext";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const {
    state: { completedTasks, activeTasks },
    dispatch,
  } = useAppContext();

  console.log("completed", completedTasks);
  console.log("activeTasks", activeTasks);

  const handleOnDragEnd = (result: DropResult) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      source.index === destination.index
    )
      return;
    if (destination.droppableId === source.droppableId) {
      dispatch({
        type: "move-task-within",
        payload: {
          id: Number(draggableId),
          destinationIndex: destination.index,
          sourceIndex: source.index,
          sourceDroppable: source.droppableId,
        },
      });
    } else {
      dispatch({
        type: "move-task-across",
        payload: {
          id: Number(draggableId),
          destinationIndex: destination.index,
          sourceIndex: source.index,
          sourceDroppable: source.droppableId,
          destinationDroppable: destination.droppableId,
        },
      });
    }
    // else if (source.droppableId === "completedTasks") {
    // }
    // if (destination.droppableId !== source.droppableId) {
    // dispatch({
    //   type: "move-active-task",
    //   payload: {
    //     id: Number(draggableId),
    //     destinationIndex: destination.index,
    //     sourceIndex: source.index,
    //   },
    // });
    // }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Box sx={{ bgcolor: "#2f74c0", minHeight: "100vh" }}>
        <Container
          maxWidth="lg"
          sx={{
            p: "20px",
          }}
        >
          <Home />
        </Container>
      </Box>
    </DragDropContext>
  );
}

export default App;
