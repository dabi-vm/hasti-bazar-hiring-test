import { ContextProviders } from "./context/ContextProviders";
import ModalContextProvider from "./context/ModalContext";
import MultiLanguageContext from "./context/MultiLanguageContext";
import SnackContextProvider from "./context/SnackContext";
import ThemeContextProvider from "./context/ThemeContext";
import { MainLayout } from "./layouts/MainLayout";
import ThemeProvider from "./themes/ThemeProvider";

function App() {
  return (
    <ContextProviders
      contextProviders={[
        MultiLanguageContext,
        ModalContextProvider,
        SnackContextProvider,
        ThemeContextProvider,
        ThemeProvider,
      ]}
    >
      <MainLayout />
    </ContextProviders>
  );
}

export default App;
