import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <Grid>
      <Navbar title={t("home")} />
      <p>{t("helloWelcomeToThisApp")}</p>
      <Link to="/profile/settings/">{t("setting")}</Link>
    </Grid>
  );
};
