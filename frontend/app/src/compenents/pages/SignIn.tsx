import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import LoginIcon from '@mui/icons-material/Login';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import { signIn } from "../../apis/auth";
import { AuthContext } from "../../App";
import { TopHeaderLayout } from "../templates/TopHeaderLayout";
import { AlertMessage } from "../organisms/auth/AlertMessage"
import { TopFooter } from "../organisms/layout/TopFooter"

export const SignIn = () => {
  const { setIsSignedIn, setCurrentUser, setUserId, setUserName, setUserImage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const generateParams = () => {
    const signInParams = {
      email: email,
      password: password,
    };
    return signInParams;
  };

  const handleSignInSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const params = generateParams();

    try {
      const res = await signIn(params);
      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);
        console.log(Cookies);
        console.log("成功")
        console.log("res.data:" + res.data);

        setIsSignedIn(true);
        setCurrentUser(res.data.data)
        setUserId(res.data.data.id)
        setUserName(res.data.data.name)
        setUserImage(res.data.data.image)

        navigate("/home")
      } else {
        setAlertMessageOpen(true)
      }
    } catch (e) {
      console.log(e);
      setAlertMessageOpen(true)
    }
  };
  const theme = createTheme();

  return (
    <>
      <TopHeaderLayout>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f9f5eb'
            // backgroundColor: '#DFEEE5'
          }}
        >
          <Paper sx={{
            marginRight: 15,
            marginLeft: 15,
            marginTop: 5,
            marginBottom: 5,
            paddingTop: 5,
            paddingBottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            elevation: 5
          }}>
            <Avatar
              sx={{
                m: 1,
                // bgcolor: 'secondary.main',
                // backgroundColor: '#FF8F00',

                backgroundColor: '#117768',

                // backgroundColor: '#DFEEE5',
                // backgroundColor: '#f9f5eb',
                color: '#f9f5eb'
              }}
            >
              <LockOutlinedIcon />
              {/* <LoginOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5" sx={{
              mb: 3
            }}>
              ログイン
          </Typography>
            <Box component="form" noValidate sx={{ mt: 1, mx: 10, alignItems: 'center', width: 500 }}>

              {/* <FormControlLabel
                control={<Checkbox value="remember" color="success" />}
                label="保存する"
              /> */}
            </Box>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                size="small"
                id="email"
                label="メールアドレス"
                name="email"
                autoComplete="email"
                autoFocus
                color="success"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  width: 400
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                // fullWidth
                size="small"
                name="password"
                label="パスワード"
                type="password"
                id="password"
                color="success"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  width: 400
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                onClick={(e) => handleSignInSubmit(e)}
                sx={{
                  width: 100,
                  mt: 5,
                  mb: 3,
                  alignItems: 'center',
                  // backgroundColor: '#117768',
                  backgroundColor: '#FF8F00',
                  '&:hover': {
                    // backgroundColor: '#117768',
                    backgroundColor: '#FF8F00',
                    opacity: 0.8
                  },
                }}
              >
                ログイン
                </Button>
            </Grid>

            <Grid container sx={{
              mb: 5
            }}>
              <Grid item xs={12} sx={{
                ml: 3,
                mb: 1
              }}>
                <Link to="#">
                  {"パスワードをリセット"}
                </Link>
              </Grid>
              <Grid item xs={12} sx={{
                ml: 3
              }}>
                <Link to="/signup">
                  {"アカウント登録はこちら"}
                </Link>
              </Grid>
            </Grid>
            <AlertMessage
              open={alertMessageOpen}
              setOpen={setAlertMessageOpen}
              severity="error"
              message="メールアドレスかパスワードが間違っています"
            />
          </Paper>
        </Box>
      </TopHeaderLayout>
    </>
  );
};
