import { Theme } from "@mui/material";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export function getThemeByName(theme: string): Theme {
  return themeMap[theme];
}

const themeMap: { [key: string]: Theme } = {
  darkTheme,
  lightTheme,
};

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    black100: true;
    black90: true;
    black80: true;
    black70: true;
  }
}
