import { Home } from "../compenents/pages/Home";
import { Page404 } from "../compenents/pages/Page404";
import { UserManagement } from "../compenents/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    children: <Home />
  },
  {
    path: "/user_management",
    children: <UserManagement />
  },
  {
    path: "*",
    children: <Page404 />
  }
];
