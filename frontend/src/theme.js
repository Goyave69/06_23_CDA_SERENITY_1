import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#6C5DD3", 
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

