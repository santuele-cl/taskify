// import { Box } from "@mui/material";
import { Task } from "../model";

import SingleTask from "./SingleTask";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  console.log(tasks);
  return (
    <Grid container spacing={2}>
      {tasks.map((task) => (
        <Grid xs={12} md={6} key={task.id}>
          <SingleTask task={task} />
        </Grid>
      ))}
    </Grid>
  );
}
