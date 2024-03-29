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
import Paper from '@mui/material/Paper';


import { signUp } from "../../apis/auth";
import { AuthContext } from "../../App";
import { SignUpParams } from "../../types/api/auth";
import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";
import { updateUser, updateUserImage, updateDeleteUserImage } from "../../apis/user";
import { FoodContext } from "../../providers/FoodProvider";
import { useEditUser } from "../../hooks/useEditUser";
import nouser from "../../images/nouser.png";

const styledImg = styled('img')({
  borderRadius: '50%'
});

export const Profile = () => {

  const { userId } = useContext(AuthContext);

  const { editUser, loading } = useEditUser();

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [image, setImage] = useState<any>("");
  const [uploadImage, setUploadImage] = useState<any>("");
  const [memo, setMemo] = useState<string>("");
  const [preview, setPreview] = useState("");
  const [trigger, setTrigger] = useState(false);

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
            paddingRight: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            elevation: 5
          }}>
            <Box component="form" noValidate sx={{ mt: 3, ml: 5, mr: 0 }}>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <img
                    alt="No Image"
                    src={image?.url != null ? image?.url : nouser}
                    width="200"
                    height="200"
                    style={{ borderRadius: "50%" }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <label htmlFor="icon-button-file">
                    < IconButton color="inherit" component="span" >
                      <CameraAltIcon />
                    </IconButton>
                    <input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      onChange={(e: any) => {
                        setUploadImage(e.target.files[0])
                        setPreview(window.URL.createObjectURL(e.target.files[0]))
                      }}
                    />
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    sx={{
                      mr: 1,
                      backgroundColor: '#FF8F00',
                      '&:hover': {
                        backgroundColor: '#FF8F00',
                        opacity: 0.8
                      },
                    }}
                    onClick={() => updateUserImage(userId, uploadImage, setTrigger)}
                  >
                    アップロード
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#424242',
                      '&:hover': {
                        backgroundColor: '#424242',
                        opacity: 0.8
                      },
                    }}
                    onClick={() => updateDeleteUserImage(userId, setTrigger)}
                  >
                    画像削除
                  </Button>
                </Grid>
                <Grid item xs={10}>
                  <Divider />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    required
                    margin="normal"
                    id="Name"
                    label="氏名"
                    name="name"
                    autoComplete="name"
                    value={name}
                    size="small"
                    color="success"
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      width: 600
                    }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <FormControl sx={{ width: 600 }} size="small" color="success">
                    <InputLabel id="demo-select-small">性別</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={gender}
                      label="Age"
                      onChange={(e) => setGender(Number(e.target.value))}
                    >
                      <MenuItem value={0}>未回答</MenuItem>
                      <MenuItem value={1}>男性</MenuItem>
                      <MenuItem value={2}>女性</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    margin="normal"
                    size="small"
                    id="date"
                    label="誕生日"
                    type="date"
                    color="success"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      width: 600
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    size="small"
                    id="outlined-multiline-static"
                    label="プロフィール"
                    multiline
                    rows="3"
                    variant="outlined"
                    value={memo}
                    color="success"
                    onChange={(e) => setMemo(e.target.value)}
                    sx={{
                      width: 600
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                onClick={() => updateUser(userId, name, String(gender), date, image, memo, setTrigger)}
                sx={{
                  width: 600,
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

          </Paper>
        </Box>
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
