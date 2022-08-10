import ModalContextProvider from "./context/ModalContext";
import ThemeContextProvider from "./context/ThemeContext";
import { MainLayout } from "./layouts/MainLayout";
import ThemeProvider from "./themes/ThemeProvider";

function App() {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <ModalContextProvider>
          <MainLayout />
        </ModalContextProvider>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
