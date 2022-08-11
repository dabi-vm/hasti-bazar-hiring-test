import { appWithTranslation } from "next-i18next";
import { ContextProviders } from "../src/context/ContextProviders";
import ModalContextProvider from "../src/context/ModalContext";
import MultiLanguageContext from "../src/context/MultiLanguageContext";
import SnackContextProvider from "../src/context/SnackContext";
import ThemeContextProvider from "../src/context/ThemeContext";
import ThemeProvider from "../src/themes/ThemeProvider";
import { Grid, Paper } from "@mui/material";
import '../public/app.css';

const App = ({ Component, pageProps }) => {
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
      <Grid
        container
        justifyContent="center"
        component={Paper}
        square
        className="fullHeight"
        variant="black100"
        sx={{ margin: 0 }}
      >
        <Grid item xs={12} md={6}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </ContextProviders>
  );
};

export default appWithTranslation(App);
