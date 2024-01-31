import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { Task } from "../model";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useRef, useState } from "react";

const taskFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent", // Remove outline color
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Remove outline color on hover
    },
  },
};

export default function SingleTask({
  task,
  setTasks,
}: {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
  const [editValue, setEditValue] = useState(task.task);
  const [editMode, setEditMode] = useState(false);

  const handleEditValueChange = (newValue: string) => {
    setEditValue(newValue);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  const handleChangeTaskStatus = (id: number) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        return task.id === id ? { ...task, isDone: !task.isDone } : task;
      });
    });
  };

  const handleSubmit = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, task: editValue } : task
      )
    );
    setEditMode(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      bgcolor="#ff0"
      p={2}
      borderRadius={2}
    >
      {editMode && !task.isDone ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (editValue) {
              handleSubmit(task.id);
            } else {
              handleDeleteTask(task.id);
            }
          }}
        >
          <TextField
            inputRef={inputRef}
            sx={taskFieldStyles}
            value={editValue}
            onChange={(e) => handleEditValueChange(e.target.value)}
          />
        </form>
      ) : (
        <Typography
          component="p"
          variant="h6"
          sx={{
            textDecoration: `${task.isDone && "line-through"}`,
          }}
        >
          {task.task}
        </Typography>
      )}

      <ButtonGroup variant="contained">
        <Button disabled={task.isDone}>
          <EditIcon
            onClick={() => {
              setEditMode((prevState) => !prevState);
            }}
          />
        </Button>
        <Button onClick={() => handleDeleteTask(task.id)}>
          <DeleteIcon />
        </Button>
        <Button onClick={() => handleChangeTaskStatus(task.id)}>
          <CheckIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
