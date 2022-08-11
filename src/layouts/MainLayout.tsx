import { Grid, Paper } from "@mui/material";

export const MainLayout = () => {
  return (
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
          
        </Grid>
      </Grid>
  );
};
