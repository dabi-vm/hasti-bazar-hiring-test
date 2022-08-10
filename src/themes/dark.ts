import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          margin: 10,
          padding: 10,
          borderRadius: 16,
        },
      },
      variants: [
        {
          props: { variant: "black100" },
          style: {
            backgroundColor: "#181b24",
          },
        },
        {
          props: { variant: "black90" },
          style: {
            backgroundColor: "#242b34",
          },
        },
        {
          props: { variant: "black80" },
          style: {
            backgroundColor: "#373d47",
          },
        },
        {
          props: { variant: "black70" },
          style: {
            backgroundColor: "#414750",
          },
        },
      ],
    },
    MuiCollapse: {
      styleOverrides: {
        root: {
          display: "flex",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ffa82e",
    },
  },
});
