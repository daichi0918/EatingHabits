import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import { teal, grey } from "@mui/material/colors";
import { signIn } from "../../apis/auth";
import { AuthContext } from "../../App";

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
      <Grid>
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
          {/* ラベルとチェックボックス */}
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

            {/* <Typography variant="caption">
              <Link href="#">パスワードを忘れましたか？</Link>
            </Typography> */}
            <Typography variant="caption" display="block">
              アカウントを持っていますか？
            <Link to="/signup">アカウントを作成</Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
      {/* <Link to="/signup">サインアップへ</Link> */}
    </>
  );
};
