import InputField from "../../components/InputField";
import { Box, Typography } from "@mui/material";
import TaskList from "../../components/TaskList";

export default function Home() {
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
      <InputField />
      <Box mt={2}>
        <TaskList />
      </Box>
    </Box>
  );
}
