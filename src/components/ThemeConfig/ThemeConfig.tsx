import { Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Navbar } from "../Navbar/Navbar";
import { SketchPicker } from "react-color";

export const ThemeConfig = () => {
  const { t } = useTranslation("common");
  const { costumeColor, setColor } = useContext(ThemeContext);

  return (
    <Grid container>
      <Navbar title={t("themeConfig")} />
      <Grid item xs={12} component={Paper} variant="black90" elevation={1}>
        <Typography variant="h3" color="primary">
          {t("themeConfig")}
        </Typography>
        <SketchPicker
          color={costumeColor}
          onChangeComplete={(v: any) => setColor(v.hex)}
        />
      </Grid>
    </Grid>
  );
};
