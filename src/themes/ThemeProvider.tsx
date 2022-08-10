import { FC, useContext } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { getThemeByName } from "./base";
import { ThemeContext } from "../context/ThemeContext";

interface IProps {
  children: any;
}
const ThemeProvider: FC<IProps> = ({ children }) => {
  const { dark } = useContext(ThemeContext);
  const theme = getThemeByName(dark ? "darkTheme" : "lightTheme");

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
