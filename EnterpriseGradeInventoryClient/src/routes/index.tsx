import { type RouteObject } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import Dashboard from "../pages/Dashboard";
const Router: RouteObject[] = [
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export default Router;
