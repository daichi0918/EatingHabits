import { FC, memo, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../compenents/pages/Home";
import { Login } from "../compenents/pages/Login";
import { Page404 } from "../compenents/pages/Page404";
import { UserManagement } from "../compenents/pages/UserManagement";
import { Lists } from "../compenents/pages/Lists"
import { HeaderLayout } from "../compenents/templates/HeaderLayout";
import { homeRoutes } from "./HomeRoutes";
import { SignUp } from "../compenents/pages/SignUp";
import { SignIn } from "../compenents/pages/SignIn";
import { AuthContext } from "../App";

export const Router: FC = memo(() => {
  const auth = useContext(AuthContext);
  const Private = ({ children }: { children: React.ReactElement }) => {
    if (!auth.loading) {
      if (auth.isSignedIn) {
        return children
      } else {
        return <Navigate to="/signin" />
      }
    } else {
      return <></>
    }
  }
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="home" element={
        <Private>
          <Home />
        </Private>
      } />
      <Route path="home/user_management" element={
        <Private>
          <UserManagement />
        </Private>
      } />
      <Route path="home/user_management/:userId/list" element={
        <Private>
          <Lists />
        </Private>
      } />
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
