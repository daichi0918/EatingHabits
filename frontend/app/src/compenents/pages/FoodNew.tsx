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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { signUp } from "../../apis/auth";
import { AuthContext } from "../../App";
import { SignUpParams } from "../../types/api/auth";
import { TopHeaderLayout } from "../templates/TopHeaderLayout";

export const FoodNew = () => {

  const date = new Date
  const today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()

  const { setIsSignedIn, setCurrentUser, setUserId } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [classification, setClassification] = useState<number>();
  const [quantity, setQuantity] = useState<number>();
  const [limitDate, setLimitDate] = useState(today);
  const [alertDate, setAlertData] = useState()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const confirmSuccessUrl = "https://yahoo.co.jp";

  const navigate = useNavigate();

  const onClickFoodAdd = () => console.log("aaa")

  // const handleSignUpSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()

  //   const params: SignUpParams = {
  //     name: name,
  //     email: email,
  //     password: password,
  //     passwordConfirmation: passwordConfirmation
  //   }

  //   try {
  //     const res = await signUp(params)

  //     if (res.status === 200) {
  //       Cookies.set("_access_token", res.headers["access-token"])
  //       Cookies.set("_client", res.headers["client"])
  //       Cookies.set("_uid", res.headers["uid"])

  //       setIsSignedIn(true)
  //       setCurrentUser(res.data.data)
  //       setUserId(res.data.data.id)

  //       navigate("/home")

  //       console.log("Signed in successfully!")
  //     } else {
  //       alert("elseエラー")
  //     }
  //   } catch (err) {
  //     console.log(err)
  //     alert("catchエラー")
  //   }
  // }

  const theme = createTheme();
  return (
    <>

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
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="Name"
                      label="名称"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel id="demo-simple-select-autowidth-label">分類</InputLabel>
                    <Select
                      required
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={classification}
                      label="分類"
                      onChange={(e) => setClassification(Number(e.target.value))}
                    >
                      <MenuItem value={1}>料理</MenuItem>
                      <MenuItem value={2}>食材</MenuItem>
                      <MenuItem value={3}>その他</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel id="demo-simple-select-autowidth-label">数量</InputLabel>
                    <Select
                      required
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value="aaa"
                      label="分類"
                      onChange={(e) => setClassification(Number(e.target.value))}
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="date"
                      label="消費期限"
                      type="date"
                      defaultValue="2017-05-24"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="datetime-local"
                      label="通知"
                      type="datetime-local"
                      defaultValue="2017-05-24"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="Name"
                      label="画像を追加"
                      name="name"
                      autoComplete="name"
                      defaultValue=""
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      label="memo"
                      multiline
                      rows="3"
                      defaultValue=""
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={onClickFoodAdd}
                  sx={{ mt: 3, mb: 2 }}
                >
                  登録する
            </Button>
              </Box>
            </Box>

          </Container>
        </ThemeProvider>
      </TopHeaderLayout>
    </>
  );
};
