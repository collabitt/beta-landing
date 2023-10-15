import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#2C3E42",
    },
    text: {
      primary: "#24252E",
      secondary: "#F5C06A",
      paragraph: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.54)",
      grey: '#8F8FA2',
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif", // The default font family
    h1: {
      fontFamily: "Big Shoulders Display, sans-serif", // Font for h1 variant
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "2px",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "1.125rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#F37321",
        },
        outlined: {
          borderColor: "#F37321",
          backgroundColor: "#000000",
          color: "#F37321",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
          input: {
              color: '#000000',
              '&::placeholder': {
                color: '#8F8FA2',
              }
          },
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#8F8FA2'
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
