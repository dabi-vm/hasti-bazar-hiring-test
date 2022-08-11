import { Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Navbar } from "../Navbar/Navbar";

export const Home = () => {
  const { t } = useTranslation("common");
  return (
    <Grid>
      <Navbar title={t("home")} />
      <p>{t("helloWelcomeToThisApp")}</p>
      <a href="/settings/">{t("setting")}</a>
    </Grid>
  );
};
