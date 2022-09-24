// import { ChakraProvider } from '@chakra-ui/react';
import React, { FC, createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from "@mui/material";

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
})

const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<UserType | undefined>()
  const [userId, setUserId] = useState<string | undefined>()

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)

        console.log(res?.data.data)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  const Private = ({ children }: { children: React.ReactElement }) => {
    if (!loading) {
      if (isSignedIn) {
        return children
      } else {
        return <Navigate to="/signin" />
      }
    } else {
      return <></>
    }
  }

  return (
    <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser, userId, setUserId }}>
      <FoodContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
            {/* <Private>
            <Route path="/">
              <Home />
            </Route>
          </Private> */}
          </BrowserRouter >
        </ThemeProvider>
      </FoodContextProvider>

    </AuthContext.Provider>
  );
}

export default App;
