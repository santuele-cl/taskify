// import { Box } from "@mui/material";
import { useAppContext } from "../AppStateContext";

import SingleTask from "./SingleTask";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function TaskList() {
  const { state } = useAppContext();
  return (
    <Grid container spacing={2}>
      {state.tasks.map((task) => (
        <Grid xs={12} md={6} key={task.id}>
          <SingleTask task={task} />
        </Grid>
      ))}
    </Grid>
  );
}
