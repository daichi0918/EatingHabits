import Cookies from "js-cookie";
import { FC, memo, useCallback, useEffect, useContext, useState } from "react";
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
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Menu from '@mui/material/Menu';

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { signOut } from "../../../apis/auth"
import { AuthContext } from "../../../App";
import nouser from "../../../images/nouser.png";
import "../../../assets/styles/footer.css";

export const TopFooter: FC = memo(() => {
  const { setIsSignedIn, userName, userImage } = useContext(AuthContext)
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const onClickHome = useCallback(() => navigate("/home"), [navigate]);
  const onClickProfile = useCallback(() => navigate("//home/settings/profile"), []);
  const onClickUserManagement = useCallback(() => navigate("/home/user_management"), [navigate]);

  const headers = {
    "access-token": Cookies.get("_access_token") as any,
    "client": Cookies.get("_client") as any,
    "uid": Cookies.get("_uid") as any,
    "content-type": "application/json"
  }

  const handleSignOut = async () => {
    try {
      const res = await signOut()

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        setIsSignedIn(false)
        navigate("/signin")

        console.log("Succeeded in sign out")
      } else {
        console.log("Failed in sign out")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];




  return (
    <>
      <footer className="footer-detail-container">
        <div className="footer-detail-container--inner center-box">
          <div className="footer-detail-top--inner flex-row">
            <h5>食べマネ</h5>
            <div className="copy-detail arial">© 2021 Rayward Inc.</div>
          </div>
          <div className="footer-detail-middle--inner flex-row">
            <div className="footer-detail-menu-text">
              <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
                特定商取引法に基づく表記
            </a>
              <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
                プライバシーポリシー
            </a>
              <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
                利用規約
            </a>
              <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
                ロイヤルティ利用規約
            </a>
              <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
                会社概要
            </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
})
