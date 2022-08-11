import ModalContextProvider from "./context/ModalContext";
import SnackContextProvider from "./context/SnackContext";
import ThemeContextProvider from "./context/ThemeContext";
import { MainLayout } from "./layouts/MainLayout";
import ThemeProvider from "./themes/ThemeProvider";

function App() {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <SnackContextProvider>
          <ModalContextProvider>
            <MainLayout />
          </ModalContextProvider>
        </SnackContextProvider>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
