import { createContext, useState } from "react";
interface IProps {
  children: any;
}
export const ThemeContext = createContext({
  dark: false,
  costumeColor: "#ffa82e",
  ToggleTheme: () => {},
  setColor: (v: string) => {},
});

const ThemeContextProvider = ({ children }: IProps) => {
  const [dark, setDark] = useState(false);
  const [costumeColor, setCostumeColor] = useState("#ffa82e");

  const ToggleTheme = () => setDark(!dark);
  const setColor = (v: string) => setCostumeColor(v);

  return (
    <ThemeContext.Provider
      value={{ dark, ToggleTheme, costumeColor, setColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
