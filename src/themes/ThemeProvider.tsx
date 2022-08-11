import { FC, useContext } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { getThemeByName } from "./base";
import { ThemeContext } from "../context/ThemeContext";
import { MultiLanguageContext } from "../context/MultiLanguageContext";

interface IProps {
  children: any;
}
const ThemeProvider: FC<IProps> = ({ children }) => {
  const { dark, costumeColor } = useContext(ThemeContext);
  const { multiLang } = useContext(MultiLanguageContext);
  const theme = getThemeByName(dark ? "darkTheme" : "lightTheme");
  theme.direction = multiLang.isRTl ? "rtl" : "ltr";
  theme.palette.primary.main = costumeColor;
  
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
