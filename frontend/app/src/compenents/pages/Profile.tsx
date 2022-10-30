import Cookies from "js-cookie";
import { useContext, useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from 'dayjs';
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import CardMedia from '@mui/material/CardMedia';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Divider from '@mui/material/Divider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

// import Image from 'react-image-resizer';


import { signUp } from "../../apis/auth";
import { AuthContext } from "../../App";
import { SignUpParams } from "../../types/api/auth";
import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";
import { updateUser } from "../../apis/user";
import { FoodContext } from "../../providers/FoodProvider";
import { useEditUser } from "../../hooks/useEditUser";
import nouser from "../../images/nouser.png";

export const Profile = () => {

  const { userId } = useContext(AuthContext);

  const { editUser, loading } = useEditUser();

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [image, setImage] = useState<any>("");
  const [memo, setMemo] = useState<string>("");
  const [preview, setPreview] = useState("");
  const [trigger, setTrigger] = useState(false);



  const uploadImage = useCallback((e: any) => {
    const file = e.target.files[0]
    setImage(e.target.files[0]);
    console.log("file:" + file)
    console.log("image:" + image)
  }, [])

  // プレビュー機能
  const previewImage = useCallback((e: any) => {
    const file = e.target.files[0]
    setPreview(window.URL.createObjectURL(file))
  }, [])

  useEffect(() => { editUser(userId, setName, setGender, setDate, setImage, setMemo) }, [trigger])

  const navigate = useNavigate();

  const theme = createTheme();
  return (
    <>
      <HomeHeaderLayout>
        {loading ? (
          <Stack alignItems="center" justifyContent="center" style={{ marginTop: '300px' }}>
            <Box sx={{ alignItems: 'center' }}>
              <CircularProgress />
            </Box>
          </Stack>
        ) : (
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
                        プロフィール変更
                  </Grid>
                      <Grid item xs={12}>
                        <CardMedia
                          component="img"
                          height="500"
                          // image={image?.url}
                          image={image?.url != null ? image?.url : nouser}
                          alt="No Image"
                          sx={{
                            borderRadius: "50%"
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {/* <TextField
                      required
                      fullWidth
                      id="Name"
                      label="画像を追加"
                      name="name"
                      autoComplete="name"
                      value={image}
                    /> */}
                        <label htmlFor="icon-button-file">
                          < IconButton color="inherit" component="span" >
                            <CameraAltIcon />
                          </IconButton>
                          {/* <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">Name</InputLabel>
                        <Input
                          // accept="image/*"
                          id="component-simple"
                          // type="file"
                          hidden
                          onChange={(e: any) => {
                            // uploadImage(e)
                            // previewImage(e)
                            setImage(e.target.files[0])
                            setPreview(window.URL.createObjectURL(e.target.files[0]))
                          }} />
                      </FormControl> */}
                          <input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                            // value={image}
                            onChange={(e: any) => {
                              // uploadImage(e)
                              // previewImage(e)
                              setImage(e.target.files[0])
                              setPreview(window.URL.createObjectURL(e.target.files[0]))
                            }}
                          />
                          {/* <TextField
                        // accept="image/*"
                        type="file"
                        hidden
                        required
                        fullWidth
                        id="Name"
                        label="画像を追加"
                        name="name"
                        autoComplete="name"
                        // value={image}
                        onChange={(e: any) => {
                          // uploadImage(e)
                          // previewImage(e)
                          setImage(e.target.files[0])
                          setPreview(window.URL.createObjectURL(e.target.files[0]))
                        }}
                      /> */}
                        </label>
                      </Grid>
                      {/* <Grid item xs={6}>
                    <Button variant="contained">
                      アップロード
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button>
                      画像削除
                    </Button>
                  </Grid> */}
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="Name"
                          label="氏名"
                          name="name"
                          autoComplete="name"
                          value={name}
                          size="small"
                          color="success"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl sx={{ width: 600 }} size="small" color="success">
                          <InputLabel id="demo-select-small">性別</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={gender}
                            label="Age"
                            onChange={(e) => setGender(Number(e.target.value))}
                          >
                            {/* <MenuItem value="">
                          <em></em>
                        </MenuItem> */}
                            <MenuItem value={0}>未回答</MenuItem>
                            <MenuItem value={1}>男性</MenuItem>
                            <MenuItem value={2}>女性</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          size="small"
                          id="date"
                          label="誕生日"
                          type="date"
                          color="success"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          // defaultValue="2017-05-24"
                          // sx={{ width: 220 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          label="プロフィール"
                          multiline
                          rows="3"
                          // margin="normal"
                          variant="outlined"
                          value={memo}
                          color="success"
                          onChange={(e) => setMemo(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => updateUser(userId, name, String(gender), date, image, memo, setTrigger)}
                      sx={{
                        mt: 3,
                        mb: 2,
                        backgroundColor: '#117768',
                        '&:hover': {
                          backgroundColor: '#117768',
                          opacity: 0.8
                        },
                      }}
                    >
                      保存する
                </Button>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          )
        }
      </HomeHeaderLayout>
      {preview ?
        <Box>
          <IconButton
            color="inherit"
            onClick={() => setPreview("")}
          >
            <CancelIcon />
          </IconButton>
          <img
            src={preview}
            alt="preview img"
          />
        </Box> : null
      }
    </>
  );
};
