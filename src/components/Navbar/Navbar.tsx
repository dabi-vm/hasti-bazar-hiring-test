import { Grid, IconButton, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { IBreadcrumbs } from "../../models/breadcrumbs";
import { GenericBreadcrumbs } from "../shared/GenericBreadcrumbs/GenericBreadcrumbs";
import { GridContainer } from "./NavbarStyles";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

interface IProps {
  title: string;
  breadcrumbs?: IBreadcrumbs[];
}
export const Navbar: FC<IProps> = ({ title, breadcrumbs }) => {
  const { dark, ToggleTheme } = useContext(ThemeContext);

  const HandleToggleTheme = () => {
    ToggleTheme();
  };

  return (
    <GridContainer container item xs={12}>
      <Grid item xs={12} container justifyContent="space-between">
        <Grid item xs={3}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item>
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
