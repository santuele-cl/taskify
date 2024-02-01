import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Droppable } from "react-beautiful-dnd";
import SingleTask from "./SingleTask";
import { useAppContext } from "../AppStateContext";

export default function ActiveTasksList() {
  const {
    state: { activeTasks },
  } = useAppContext();

  return (
    <Droppable droppableId="activeTasks">
      {(provided) => (
        <Grid
          // spacing={2}
          ref={provided.innerRef}
          {...provided.droppableProps}
          xs={12}
          md={6}
        >
          <Typography
            variant="h5"
            textAlign="center"
            textTransform="uppercase"
            py={1}
          >
            Active Tasks
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            {activeTasks.map((task, index) => (
              <Grid xs={12} key={task.id}>
                <SingleTask task={task} index={index} from="activeTasks" />
              </Grid>
            ))}
            {provided.placeholder}
          </Box>
        </Grid>
      )}
    </Droppable>
  );
}
