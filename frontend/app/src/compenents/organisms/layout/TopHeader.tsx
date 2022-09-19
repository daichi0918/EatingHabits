// import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const TopHeader: FC = memo(() => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickTop = useCallback(() => navigate("/"), [navigate]);

  // useEffect(() => {
  //   axios.get<any>("http://localhost:3002/api/v1/users").then((res) => {
  //     console.log(res)
  //   })
  // }, [])




  return (
    <>
      {/* <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            EHmanger
        </Heading>
        </Flex>

        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          {/* <Link>ユーザー一覧</Link> */}
      {/* </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex >
  <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickUserManagement={onClickUserManagement}
  />
  * /} */}
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={onClickHome}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              EH manager
          </Typography>
            <div style={{ flexGrow: 1 }}></div>
            <Button color="inherit" onClick={onClickUserManagement}>users</Button>
            <Button color="inherit">Logout</Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box> */}
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap sx={{ flexGrow: 1 }}
            onClick={onClickTop}
          >
            EH manager
          </Typography>
          <nav>
            {/* <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link> */}
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              FAQ
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/signin"
              sx={{ my: 1, mx: 1.5 }}
            >
              ログイン
            </Link>
          </nav>
          <Button href="/signup" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            新規登録
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
})
