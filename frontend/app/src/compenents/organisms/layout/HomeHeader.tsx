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

export const HomeHeader: FC = memo(() => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/home"), [navigate]);
  const onClickUserManagement = useCallback(() => navigate("/home/user_management"), [navigate]);

  useEffect(() => {
    axios.get<any>("http://localhost:3002/api/v1/users").then((res) => {
      console.log(res)
    })
  }, [])



  return (
    <>
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
            noWrap
            sx={{ flexGrow: 1 }}
            onClick={onClickHome}
          >
            EH manager
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              ログアウト
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              マイページ
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  )
})
