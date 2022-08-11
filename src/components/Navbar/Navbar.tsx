import { Button, Grid, IconButton, Typography } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { IBreadcrumbs } from "../../models/breadcrumbs";
import { GenericBreadcrumbs } from "../shared/GenericBreadcrumbs/GenericBreadcrumbs";
import { GridContainer } from "./NavbarStyles";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { getLocalStorage, setLocalStorage } from "../../func/common";
import { MultiLanguageContext } from "../../context/MultiLanguageContext";

interface IProps {
  title: string;
  breadcrumbs?: IBreadcrumbs[];
}
export const Navbar: FC<IProps> = ({ title, breadcrumbs }) => {
  const { dark, ToggleTheme } = useContext(ThemeContext);
  const { multiLang, changeLang } = useContext(MultiLanguageContext);

  const HandleToggleTheme = () => {
    ToggleTheme();
  };

  const ToggleRtl = () => {
    if (multiLang.lang === "faIR") {
      changeLang({ isRTl: false, lang: "enUS" });
      document.dir = "ltr";
    } else {
      changeLang({ isRTl: true, lang: "faIR" });
      document.dir = "rtl";
    }
  };

  useEffect(() => {
    setLocalStorage("lang", multiLang.lang);
  }, [multiLang]);

  return (
    <GridContainer container item xs={12}>
      <Grid item xs={12} container justifyContent="space-between">
        <Grid item xs={3}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item>
          <Button onClick={ToggleRtl}>
            {multiLang.lang === "faIR" ? "فارسی" : "English"}
          </Button>
          <IconButton onClick={HandleToggleTheme}>
            {dark ? <NightlightIcon /> : <LightModeIcon />}
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {breadcrumbs && <GenericBreadcrumbs links={breadcrumbs} />}
      </Grid>
    </GridContainer>
  );
};
