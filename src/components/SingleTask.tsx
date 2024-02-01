import { Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { Task } from "../model";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../AppStateContext";
import { Draggable } from "react-beautiful-dnd";

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
  index,
  from,
}: {
  task: Task;
  index: number;
  from: string;
}) {
  const { dispatch } = useAppContext();
  const [editValue, setEditValue] = useState(task.task);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (id: number) => {
    dispatch({
      type: "update-task",
      payload: { id: id, updatedTask: editValue },
    });

    setEditMode(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode]);

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <Box
          display="flex"
          justifyContent="space-between"
          bgcolor="#ff0"
          p={2}
          borderRadius={2}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {editMode && !task.isDone ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editValue) {
                  handleSubmit(task.id);
                }
              }}
            >
              <TextField
                inputRef={inputRef}
                sx={taskFieldStyles}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
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
            <Button
              onClick={() =>
                dispatch({
                  type: "delete-task",
                  payload: { id: task.id, from },
                })
              }
            >
              <DeleteIcon />
            </Button>
            <Button
              onClick={() => {
                dispatch({
                  type: "toggle-task",
                  payload: { id: task.id, from },
                });
              }}
            >
              <CheckIcon />
            </Button>
          </ButtonGroup>
        </Box>
      )}
    </Draggable>
  );
}
