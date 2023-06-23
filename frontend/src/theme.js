import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF", 
    },
    secondary: {
      main: "#6C5DD3",
    },
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        backgroundColor: "#AF8EFF", 
      },
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 13,
    button: {
      fontWeight: 700,
    },
  },
});

