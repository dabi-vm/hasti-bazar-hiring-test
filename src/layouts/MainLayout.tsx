import { Grid, Paper } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoutes from "../routes/Router";

export const MainLayout = () => {
  return (
    <BrowserRouter>
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
          <Routes>
            {MainRoutes.map((route) => (
              <Route
                caseSensitive
                key={route.path}
                path={route.path}
                element={route.component as any}
              />
            ))}
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};
