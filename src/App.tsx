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
        ModalContextProvider,
        SnackContextProvider,
        ThemeContextProvider,
        ThemeProvider,
        MultiLanguageContext,
      ]}
    >
        <MainLayout />
    </ContextProviders>
  );
}

export default App;
