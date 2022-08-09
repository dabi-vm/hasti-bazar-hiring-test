import { Container, Grid } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import MainRoutes from "../routes/Router";

export const MainLayout = () => {
  return (
    <BrowserRouter>
      <Container>
        <Grid container>
          <Navbar />
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
      </Container>
    </BrowserRouter>
  );
};
