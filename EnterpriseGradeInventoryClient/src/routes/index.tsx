import { type RouteObject } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
const Router: RouteObject[] = [
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
];

export default Router;
