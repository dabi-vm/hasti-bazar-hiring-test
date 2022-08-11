import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  components: {
    MuiCollapse: {
      styleOverrides: {
        root: {
          display: "flex",
        },
      },
    },
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
            backgroundColor: "#fff",
          },
        },
        {
          props: { variant: "black90" },
          style: {
            backgroundColor: "#fff",
            boxShadow:
              "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
          },
        },
        {
          props: { variant: "black80" },
          style: {
            backgroundColor: "#f5f6f8",
          },
        },
        {
          props: { variant: "black70" },
          style: {
            backgroundColor: "#f5f6f8",
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          display: "flex",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#ffa82e",
    },
  },
});
