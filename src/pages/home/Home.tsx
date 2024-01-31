import InputField from "../../components/InputField";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Task } from "../../model";
import TaskList from "../../components/TaskList";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      const newTask: Task = { id: Date.now(), task, isDone: false };
      setTasks((prevState) => [...prevState, newTask]);
      setTask("");
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        fontFamily="Neucha"
        color="#fff"
        gutterBottom
        position="relative"
        zIndex={1}
      >
        Taskify
      </Typography>
      <InputField task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <Box mt={2}>
        <TaskList tasks={tasks} setTasks={setTasks} />
        {/* {tasks.map((task) => (
          <Paper>
            {`Task: ${task.task}`}
            {`Completed: ${task.isDone ? "true" : "false"}`}
          </Paper>
        ))} */}
      </Box>
    </Box>
  );
}
