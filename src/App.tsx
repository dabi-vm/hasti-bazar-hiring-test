import ModalContextProvider from "./context/ModalContext";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <ModalContextProvider>
      <MainLayout />
    </ModalContextProvider>
  );
}

export default App;
