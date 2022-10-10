import { FC, memo, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../compenents/pages/Home";
import { Login } from "../compenents/pages/Login";
import { Page404 } from "../compenents/pages/Page404";
import { UserManagement } from "../compenents/pages/UserManagement";
import { Lists } from "../compenents/pages/Lists"
import { TopHeaderLayout } from "../compenents/templates/TopHeaderLayout";
import { homeRoutes } from "./HomeRoutes";
import { SignUp } from "../compenents/pages/SignUp";
import { SignIn } from "../compenents/pages/SignIn";
import { AuthContext } from "../App";
import { Food } from "../compenents/pages/Food";
import { FoodNew } from "../compenents/pages/FoodNew";
import { FoodContextProvider } from "../providers/FoodProvider";
import { FoodEdit } from "../compenents/pages/FoodEdit";
import { Post } from "../compenents/pages/Post";
import { PostContextProvider } from "../providers/PostProvider";
import { PostNew } from "../compenents/pages/PostNew";

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
      <Route path="home/list" element={
        <Private>
          <Lists />
        </Private>
      } />
      <Route path="home/food" element={
        <Private>
          <FoodContextProvider>
            <Food />
          </FoodContextProvider>
        </Private>
      } />
      <Route path="home/food/new" element={
        <Private>
          <FoodContextProvider>
            <FoodNew />
          </FoodContextProvider>
        </Private>
      } />
      <Route path="home/food/edit" element={
        <Private>
          <FoodContextProvider>
            <FoodEdit />
          </FoodContextProvider>
        </Private>
      } />
      <Route path="home/post" element={
        <Private>
          <PostContextProvider>
            <Post />
          </PostContextProvider>
        </Private>
      } />
      <Route path="home/post/new" element={
        <Private>
          <PostContextProvider>
            <PostNew />
          </PostContextProvider>
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
