import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import App from "./App.tsx";
import "./index.css";
// import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    // success: {
    //   main: red[500],
    // },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
