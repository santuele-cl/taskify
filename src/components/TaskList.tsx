import { Box } from "@mui/system";
import ActiveTasksList from "./ActiveTasksList";
import CompletedTaskList from "./CompletedTasksList";
import { red } from "@mui/material/colors";
export default function TaskList() {
  return (
    <Box
      display="flex"
      gap={1}
      alignItems="flex-start"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box
        width={{ xs: "100%", md: "50%" }}
        bgcolor="paleturquoise"
        borderRadius={4}
        p={1}
      >
        <ActiveTasksList />
      </Box>
      <Box
        width={{ xs: "100%", md: "50%" }}
        bgcolor={red[300]}
        borderRadius={4}
        p={1}
      >
        <CompletedTaskList />
      </Box>
    </Box>
  );
}
