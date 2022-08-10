import { Home } from "../components/Home/Home";
import { Settings } from "../components/Settings/Settings";

const MainRoutes = [
  { path: "/", component: <Home /> },
  { path: "/profile/settings", component: <Settings /> },
];

export default MainRoutes;
