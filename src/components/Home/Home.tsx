import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

export const Home = () => {
  return (
    <Grid>
      <Navbar title="خانه" />
      <p>با سلام به آزمون فوق خوش آمدید امیدواریم همیشه سلامت باشید.</p>
      <Link to="/profile/settings/">تنظیمات</Link>
    </Grid>
  );
};
