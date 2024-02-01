import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Droppable } from "react-beautiful-dnd";
import SingleTask from "./SingleTask";
import { useAppContext } from "../AppStateContext";

export default function CompletedTasksList() {
  const {
    state: { completedTasks },
  } = useAppContext();

  return (
    <Droppable droppableId="completedTasks">
      {(provided) => (
        <Grid
          // spacing={2}
          // height="100%"
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
            Completed Tasks
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            {completedTasks.map((task, index) => (
              <Grid xs={12} key={task.id}>
                <SingleTask task={task} index={index} from="completedTasks" />
              </Grid>
            ))}
            {provided.placeholder}
          </Box>
        </Grid>
      )}
    </Droppable>
  );
}
