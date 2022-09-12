// import { ChakraProvider } from '@chakra-ui/react';
import React, { FC, createContext, useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { ThemeProvider } from "@mui/material";

import theme from "./theme/theme";
import { getCurrentUser } from "../src/apis/auth";
import { Router } from './router/Router';
import { UserType } from '../src/types/api/usertype';
import { Home } from "../src/compenents/pages/Home";


export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: UserType | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType | undefined>>
})

const App: FC = () => {

  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<UserType | undefined>()

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
    <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
          <Private>
            <Route path="/" element={<Home />} />
          </Private>
        </BrowserRouter >
      </ThemeProvider>
    </AuthContext.Provider>

    // <ChakraProvider theme={theme}>

    // </ChakraProvider>
  );
}

export default App;
