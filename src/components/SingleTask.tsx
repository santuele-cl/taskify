import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { Task } from "../model";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

export default function SingleTask({ task }: { task: Task }) {
  console.log(task);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      bgcolor="#ff0"
      p={2}
      borderRadius={2}
    >
      <TextField defaultValue={task.task} />
      {/* <Typography component="p" variant="h6">
        {task.task}
      </Typography> */}
      <ButtonGroup variant="contained">
        <Button>
          <CheckIcon />
        </Button>
        <Button>
          <EditIcon />
        </Button>
        <Button>
          <DeleteIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
