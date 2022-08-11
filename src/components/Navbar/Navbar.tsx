import { Button, Grid, IconButton, Typography } from "@mui/material";
import { FC, useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { IBreadcrumbs } from "../../models/breadcrumbs";
import { GenericBreadcrumbs } from "../shared/GenericBreadcrumbs/GenericBreadcrumbs";
import { GridContainer } from "./NavbarStyles";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { setLocalStorage } from "../../func/common";
import { MultiLanguageContext } from "../../context/MultiLanguageContext";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

interface IProps {
  title: string;
  breadcrumbs?: IBreadcrumbs[];
}
export const Navbar: FC<IProps> = ({ title, breadcrumbs }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { dark, ToggleTheme } = useContext(ThemeContext);
  const { multiLang, changeLang } = useContext(MultiLanguageContext);

  const HandleToggleTheme = () => {
    ToggleTheme();
  };

  const ToggleRtl = () => {
    if (multiLang.lang === "faIR") {
      changeLang({ isRTl: false, lang: "enUS" });
      document.dir = "ltr";
      setLocalStorage("lang", "enUS");
    } else {
      changeLang({ isRTl: true, lang: "faIR" });
      document.dir = "rtl";
      setLocalStorage("lang", "faIR");
    }
  };

  return (
    <GridContainer container item xs={12}>
      <Grid item xs={12} container justifyContent="space-between">
        <Grid item xs={3}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item>
          <Link
            href={router.pathname}
            locale={router.locale === "en" ? "fa" : "en"}
          >
            <Button onClick={ToggleRtl}>{t("language")}</Button>
          </Link>
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
