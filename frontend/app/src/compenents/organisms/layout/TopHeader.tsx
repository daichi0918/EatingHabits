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
import LoginIcon from '@mui/icons-material/Login';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HelpIcon from '@mui/icons-material/Help';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const TopHeader: FC = memo(() => {
  const navigate = useNavigate();

  const onClickTop = useCallback(() => navigate("/"), [navigate]);
  const onClickSignin = useCallback(() => navigate("/signin"), [navigate]);
  const onClickSignup = useCallback(() => navigate("/signup"), [navigate]);

  return (
    <>
      <AppBar
        component="nav"
        color="inherit"
        elevation={3}
        sx={{
          borderBottom: '5px solid',
          color: 'white'
        }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography
            onClick={onClickTop}
            variant="h6"
            color="inherit"
            noWrap
            sx={{
              color: 'black',
              flexGrow: 1,
              '&:hover': {
                cursor: "pointer",
              },
            }}
          >
            食べマネ
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              sx={{
                backgroundColor: 'white',
                color: 'black'
              }}>
              <IconButton
                color="inherit"
                sx={{
                  color: '#FF8F00'
                }}>
                <HelpIcon
                  fontSize="medium"
                />
              </IconButton>
              <Typography
                color="inherit"
                noWrap
                sx={{
                  color: 'black',
                  flexGrow: 1,
                }}
              >
                よくある質問
              </Typography>
            </Button>
            <Button
              onClick={onClickSignin}
              sx={{
                backgroundColor: 'white',
                color: 'black'
              }}>
              <IconButton
                color="inherit"
                sx={{
                  color: 'black'
                }}>
                <LockOutlinedIcon />
              </IconButton>
              <Typography
                color="inherit"
                noWrap
                sx={{
                  color: 'black',
                  flexGrow: 1,
                }}
              >
                ログイン
              </Typography>
            </Button>
            <Button
              onClick={onClickSignup}
              sx={{
                backgroundColor: 'white',
                color: 'black',
              }}>
              <IconButton
                color="inherit"
                sx={{
                  color: 'black'
                }}>
                <PersonAddIcon />
              </IconButton>
              <Typography
                color="inherit"
                noWrap
                sx={{
                  color: 'black',
                  flexGrow: 1,
                }}
              >
                アカウント登録
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
})
