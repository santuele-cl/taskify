import { Box, Container } from "@mui/material";
import "./App.css";
import Home from "./pages/home/Home";
import AppState from "./AppStateContext";

function App() {
  return (
    <AppState>
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
    </AppState>
  );
}

export default App;
