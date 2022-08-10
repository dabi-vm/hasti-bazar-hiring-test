import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { IBreadcrumbs } from "../../models/breadcrumbs";
import { GenericBreadcrumbs } from "../shared/GenericBreadcrumbs/GenericBreadcrumbs";
import { GridContainer } from "./NavbarStyles";

interface IProps {
  title: string;
  breadcrumbs?: IBreadcrumbs[];
}
export const Navbar: FC<IProps> = ({ title, breadcrumbs }) => {
  return (
    <GridContainer container item xs={12}>
      <Grid item xs={12}>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        {breadcrumbs && <GenericBreadcrumbs links={breadcrumbs} />}
      </Grid>
    </GridContainer>
  );
};
