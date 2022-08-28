import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../compenents/pages/Home";
import { Login } from "../compenents/pages/Login";
import { Page404 } from "../compenents/pages/Page404";
import { UserManagement } from "../compenents/pages/UserManagement";
import { HeaderLayout } from "../compenents/templates/HeaderLayout";
import { homeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="user_management" element={<UserManagement />} />
      <Route path="*" element={<Page404 />} />
      {/* <Route path="/home" render={({ match: { url } }) => {
        {
          homeRoutes.map((route) => (
            <Route key={route.path} path={`${url}${route.path}`}>
              <HeaderLayout />
              {route.children}
            </Route>
          ))
        }
      }} /> */}
    </Routes>
  )
})
