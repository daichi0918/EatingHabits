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

import { signUp } from "../../apis/auth";
import { AuthContext } from "../../App";
import { SignUpParams } from "../../types/api/auth";
import { TopHeaderLayout } from "../templates/TopHeaderLayout";

export const SignUp = () => {
  const { setIsSignedIn, setCurrentUser, setUserId } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const confirmSuccessUrl = "https://yahoo.co.jp";

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
      {/* <h1>サインアップページです</h1>
      <form>
        <div>
          <label htmlFor="name">名前</label>
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password_confirmation">パスワード確認</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <div>
          <input
            type="hidden"
            id="confirm_success_url"
            name="confirm_success_url"
            value={confirmSuccessUrl}
          />
        </div>
        <button type="submit" onClick={(e) => handleSignUpSubmit(e)}>
          Submit
        </button>
      </form>
      <Link to="/signin">サインインへ</Link> */}
      <TopHeaderLayout>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
          </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="Name"
                      label="Name"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password_confirmation"
                      label="Password Confirmation"
                      type="password"
                      id="password_confirmation"
                      autoComplete="new-password_confirmation"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={(e) => handleSignUpSubmit(e)}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
            </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/signin">
                      Already have an account? Sign in
                </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>

          </Container>
        </ThemeProvider>
      </TopHeaderLayout>
    </>
  );
};
