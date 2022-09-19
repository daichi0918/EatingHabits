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

import { signIn } from "../../apis/auth";
import { AuthContext } from "../../App";
import { TopHeaderLayout } from "../templates/TopHeaderLayout";

export const SignIn = () => {
  const { setIsSignedIn, setCurrentUser, setUserId } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        navigate("/home")
      }
    } catch (e) {
      console.log(e);
    }
  };
  const theme = createTheme();

  return (
    <>
      {/* <p>サインインページです</p>
      <form>
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
        <button type="submit" onClick={(e) => handleSignInSubmit(e)}>
          Submit
        </button>
      </form> */}
      {/* <Grid>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            height: "50vh",
            width: "280px",
            m: "20px auto"
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start" //多分、デフォルトflex-startなので省略できる。
            alignItems="center"
          >
            <Avatar sx={{ bgcolor: teal[400] }}>
              <LockIcon />
            </Avatar>
            <Typography variant={"h5"} sx={{ m: "30px" }}>
              Login
          </Typography>
          </Grid>
          <TextField
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            type="password"
            label="Password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
          />
          <FormControlLabel
            labelPlacement="end"
            label="パスワードを忘れました"
            control={<Checkbox name="checkboxA" size="small" color="primary" />}
          />
          <Box mt={3}>
            <Button
              type="submit"
              sx={[{ bgcolor: grey[700] },
              {
                '&:hover': {
                  bgcolor: grey[600]
                }
              }
              ]}
              variant="contained"
              onClick={(e) => handleSignInSubmit(e)}
              fullWidth
            >
              ログイン
          </Button>
            <Typography variant="caption" display="block">
              アカウントを持っていますか？
            <Link to="/signup">アカウントを作成</Link>
            </Typography>
          </Box>
        </Paper>
      </Grid> */}
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
                Sign in
          </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={(e) => handleSignInSubmit(e)}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
            </Button>
                <Grid container>
                  {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid> */}
                  <Grid item>
                    <Link to="/signup">
                      {"Don't have an account? Sign Up"}
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
