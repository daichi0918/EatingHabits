import React, { FC, createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from "@mui/material";
import Cookies from "js-cookie"

import theme from "./theme/theme";
import { getCurrentUser } from "../src/apis/auth";
import { Router } from './router/Router';
import { UserType } from '../src/types/api/usertype';
import { Home } from './compenents/pages/Home';
import { FoodContextProvider } from './providers/FoodProvider';


export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: UserType | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
  userId: string | undefined
  setUserId: React.Dispatch<React.SetStateAction<string | undefined>>
  userName: string
  setUserName: React.Dispatch<React.SetStateAction<string>>
  userImage: any
  setUserImage: React.Dispatch<React.SetStateAction<any>>
})

const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<UserType | undefined>()
  const [userId, setUserId] = useState<string | undefined>()
  const [userName, setUserName] = useState<string>("")
  const [userImage, setUserImage] = useState<any>("")

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)
        setUserId(res.data.data.id)
        setUserName(res.data.data.name)
        setUserImage(res.data.data.image)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    // setTimeout(handleGetCurrentUser, 3000);
    handleGetCurrentUser()
  }, [setCurrentUser])

  return (
    <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser, userId, setUserId, userName, setUserName, userImage, setUserImage }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
