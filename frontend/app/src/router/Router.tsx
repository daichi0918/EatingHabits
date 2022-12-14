import { FC, memo, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../compenents/pages/Home";
import { Top } from "../compenents/pages/Top";
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
import { DailyPage } from "../compenents/pages/DailyPage";
import { DailyNew } from "../compenents/pages/DailyNew";
import { DiaryContextProvider } from "../providers/DiaryProvider";
import { DailyEdit } from "../compenents/pages/DailyEdit";
import { Profile } from "../compenents/pages/Profile";

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
      <Route path="" element={<Top />} />
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
      <Route path="home/food/:id/edit" element={
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

      <Route path="home/daily" element={
        <Private>
          <DiaryContextProvider>
            <DailyPage />
          </DiaryContextProvider>

        </Private>
      } />

      <Route path="home/daily/new" element={
        <Private>
          <DiaryContextProvider>
            <DailyNew />
          </DiaryContextProvider>
        </Private>
      } />

      <Route path="home/daily/edit" element={
        <Private>
          <DiaryContextProvider>
            <DailyEdit />
          </DiaryContextProvider>
        </Private>
      } />

      <Route path="home/settings/profile" element={
        <Private>
          <Profile />
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
      {/* <Route path="home">
        <Route path="example" />
      </Route> */}
    </Routes>
  )
})
