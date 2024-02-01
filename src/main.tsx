import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import App from "./App.tsx";
import "./index.css";
import AppStateContext from "./AppStateContext.tsx";
// import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    // success: {
    //   main: red[500],
    // },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <AppStateContext>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <App />
    </ThemeProvider>
  </AppStateContext>
  // </React.StrictMode>
);
