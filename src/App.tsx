import { Box, Container } from "@mui/material";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <Box sx={{ bgcolor: "#2f74c0", minHeight: "100vh" }}>
      <Container
        maxWidth="lg"
        sx={{
          p: "20px",
        }}
      >
        <Home />
      </Container>
    </Box>
  );
}

export default App;
