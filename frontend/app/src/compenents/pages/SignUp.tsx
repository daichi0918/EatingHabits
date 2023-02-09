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
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { signUp } from "../../apis/auth";
import { AuthContext } from "../../App";
import { SignUpParams } from "../../types/api/auth";
import { TopHeaderLayout } from "../templates/TopHeaderLayout";

export const SignUp = () => {
  const { setIsSignedIn, setCurrentUser, setUserId, setUserName, setUserImage } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const handleSignUpSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const params: SignUpParams = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
    }

    try {
      const res = await signUp(params)

      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setIsSignedIn(true)
        setCurrentUser(res.data.data)
        setUserId(res.data.data.id)
        setUserName(res.data.data.name)
        setUserImage(res.data.data.image)

        navigate("/home")

        console.log("Signed in successfully!")
      } else {
        alert("elseエラー")
      }
    } catch (err) {
      console.log(err)
      alert("catchエラー")
    }
  }

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
                backgroundColor: '#117768',
                color: '#f9f5eb'
              }}
            >
              <PersonAddIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{
              mb: 3
            }}>
              アカウント登録
          </Typography>
            <Box component="form" noValidate sx={{ mt: 1, mx: 10, alignItems: 'center', width: 500 }}>
            </Box>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                size="small"
                id="Name"
                label="氏名"
                name="name"
                color="success"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  width: 400
                }}
              />
            </Grid>
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
                fullWidth
                name="password"
                label="パスワード"
                color="success"
                size="small"
                type="password"
                id="password"
                autoFocus
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  width: 400
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                color="success"
                size="small"
                name="password_confirmation"
                label="パスワード(確認用)"
                type="password"
                id="password_confirmation"
                autoFocus
                autoComplete="new-password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                onClick={(e) => handleSignUpSubmit(e)}
                sx={{
                  width: 150,
                  mt: 5,
                  mb: 3,
                  alignItems: 'center',
                  backgroundColor: '#FF8F00',
                  '&:hover': {
                    backgroundColor: '#FF8F00',
                    opacity: 0.8
                  },
                }}
              >
                アカウント登録
                </Button>
            </Grid>

            <Grid container sx={{
              mb: 5
            }}>
              <Grid item xs={12} sx={{
                ml: 3,
                color: '#117768'
              }}>
                <Link to="/signin">
                  {"ログインはこちら"}
                </Link>
              </Grid>
            </Grid>
            {/* <AlertMessage
              open={alertMessageOpen}
              setOpen={setAlertMessageOpen}
              severity="error"
              message="メールアドレスかパスワードが間違っています"
            /> */}
          </Paper>
        </Box>
      </TopHeaderLayout>
    </>
  );
};
