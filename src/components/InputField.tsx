import { TextField, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
// import { Task } from "../model";

interface InputFieldProps {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}

const btnStyles = {
  margin: "5px",
  position: "absolute",
  right: "2px",
  top: "0",
  bottom: "0",
  borderRadius: "15px",
};

const taskFieldStyles = {
  bgcolor: "#fff",
  borderRadius: "15px",
  // outline: "none",
  "& .Mui-focused": {
    boxShadow: "0 0 10px 500px rgba(0,0,0,.5)",
    borderRadius: "15px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent", // Remove outline color
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Remove outline color on hover
    },
  },
};

export default function InputField({
  task,
  setTask,
  handleAddTask,
}: InputFieldProps) {
  return (
    <Box
      component="form"
      position="relative"
      autoComplete="off"
      onSubmit={handleAddTask}
    >
      <TextField
        fullWidth
        placeholder="Enter a task..."
        sx={taskFieldStyles}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target?.value)}
      />
      <Button
        disabled={!task}
        type="submit"
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<AddIcon fontSize="small" />}
        sx={btnStyles}
      >
        Add
      </Button>
    </Box>
  );
}
