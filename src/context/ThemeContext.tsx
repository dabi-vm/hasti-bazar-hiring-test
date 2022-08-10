import { createContext, useState } from "react";
interface IProps {
  children: any;
}

export const ThemeContext = createContext({
  dark: false,
  ToggleTheme: () => {},
});

const ThemeContextProvider = ({ children }: IProps) => {
  const [dark, setDark] = useState(false);

  const ToggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
