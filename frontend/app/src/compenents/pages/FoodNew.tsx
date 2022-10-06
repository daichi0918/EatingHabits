import Cookies from "js-cookie";
import axios from 'axios'
import { useContext, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles'
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

import { signUp } from "../../apis/auth";
import { AuthContext } from "../../App";
import { SignUpParams } from "../../types/api/auth";
import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";
import { createFood } from "../../apis/food";
import { FoodContext } from "../../providers/FoodProvider";

const Input = styled("input")({
  display: "none"
})

// const useStyles = styled("input")((theme: Theme) => ({
//   form: {
//     display: "flex",
//     flexWrap: "wrap",
//     width: 320
//   },
//   inputFileBtn: {
//     marginTop: "10px"
//   },
//   submitBtn: {
//     marginTop: "10px",
//     marginLeft: "auto"
//   },
//   box: {
//     margin: "2rem 0 4rem",
//     width: 320
//   },
//   preview: {
//     width: "100%"
//   }
// }))

const formStyles = styled("form")((theme: any) => ({
  display: "flex",
  flexWrap: "wrap",
  width: 320
}))

export const FoodNew = () => {

  const { userId } = useContext(AuthContext);
  const { setTrigger } = useContext(FoodContext);

  const [name, setName] = useState("");
  const [classification, setClassification] = useState<any>();
  const [quantity, setQuantity] = useState<any>();
  const [limitDate, setLimitDate] = useState<any>(dayjs());
  const [alertDate, setAlertDate] = useState<any>(dayjs());
  const [image, setImage] = useState<any>()
  const [memo, setMemo] = useState("");



  const [preview, setPreview] = useState<string>("")

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

  const confirmButton = () => {
    console.log("image:" + image);
    console.log("preview:" + preview)
    console.log(image.mozFullPath)
  }

  const navigate = useNavigate();

  const theme = createTheme();
  return (
    <>

      <HomeHeaderLayout>
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
                      // value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel id="demo-simple-select-autowidth-label">分類</InputLabel>
                    <Select
                      required
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={classification}
                      label="分類"
                      onChange={(e) => setClassification(Number(e.target.value))}
                    >
                      <MenuItem value={1}>料理</MenuItem>
                      <MenuItem value={2}>食材</MenuItem>
                      <MenuItem value={3}>その他</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel id="demo-simple-select-autowidth-label">数量</InputLabel>
                    <Select
                      required
                      fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={quantity}
                      label="数量"
                      onChange={(e) => setQuantity(Number(e.target.value))}
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
                  <Grid item xs={5}>
                    <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="消費期限"
                        value={limitDate}
                        onChange={(newValue) => {
                          setLimitDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={7}>
                    <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        renderInput={(params: any) => <TextField {...params} />}
                        label="通知"
                        value={alertDate}
                        onChange={(newValue: any) => {
                          setAlertDate(newValue);
                        }}
                        minDateTime={dayjs()}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    {/* <TextField
                      required
                      fullWidth
                      id="Name"
                      label="画像を追加"
                      name="name"
                      autoComplete="name"
                      // value={image}
                      type="file"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        uploadImage(e)
                        previewImage(e)
                        console.log("image:" + image)
                        console.log("preview:" + preview)
                      }}
                    /> */}
                    <label htmlFor="icon-button-file">
                      <input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        onChange={(e: any) => {
                          // uploadImage(e)
                          // previewImage(e)
                          setImage(e.target.files[0])
                          setPreview(window.URL.createObjectURL(e.target.files[0]))
                        }}
                      />
                    </label>
                    < IconButton color="inherit" component="span" >
                      <CameraAltIcon />
                    </IconButton>
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
                      // value={memo}
                      onChange={(e) => setMemo(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => createFood(userId, setTrigger, navigate, name, classification, quantity, limitDate, alertDate, image, memo)}
                  // onClick={sendFormData}
                  sx={{ mt: 3, mb: 2 }}
                >
                  追加する
                </Button>
                <Button onClick={confirmButton}
                >
                  kakuninn
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </HomeHeaderLayout>
      { preview ?
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
