import Cookies from "js-cookie";
import axios from 'axios'
import { useContext, useState, useCallback, useEffect } from "react";
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
import FormControl from '@mui/material/FormControl';

import { signUp } from "../../apis/auth";
import { AuthContext } from "../../App";
import { SignUpParams } from "../../types/api/auth";
import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";
import { createDiary, updateDiary, destroyDiary } from "../../apis/diary";
import { DiaryContext } from "../../providers/DiaryProvider";
import { useEditDiary } from "../../hooks/useEditDiary";

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

export const DailyEdit = () => {

  const { userId } = useContext(AuthContext);
  const { diaryId, setTrigger } = useContext(DiaryContext);

  const { editDiary, loading } = useEditDiary();

  const [mealtime, setMealtime] = useState<any>("");
  const [eatOn, setEatOn] = useState<any>("");
  const [mainmenu, setMainmenu] = useState<string>("");
  const [sidemenu, setSidemenu] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [preview, setPreview] = useState<string>("")

  useEffect(() => { editDiary(userId, diaryId, setMealtime, setEatOn, setMainmenu, setSidemenu, setImage) }, [])

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
    console.log(eatOn)
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
                  <Grid item xs={6}>
                    <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                      <DatePicker
                        views={['year', 'month', 'day']}
                        label="日付"
                        value={eatOn}
                        onChange={(newValue) => { setEatOn(newValue.format('YYYY-MM-DD')) }}
                        renderInput={(params) => <TextField {...params} helperText={null} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">時間帯</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={mealtime}
                        label="Age"
                        onChange={(e) => { setMealtime(Number(e.target.value)) }}
                        required
                      >
                        <MenuItem value={1}>朝</MenuItem>
                        <MenuItem value={2}>昼</MenuItem>
                        <MenuItem value={3}>夕</MenuItem>
                        <MenuItem value={4}>その他</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="Name"
                      label="メインメニュー"
                      name="name"
                      autoComplete="name"
                      value={mainmenu}
                      onChange={(e) => setMainmenu(e.target.value)}
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
                      value={sidemenu}
                      onChange={(e) => setSidemenu(e.target.value)}
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
                        // value={image}
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
                  {/* <Grid item xs={12}>
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
                  </Grid> */}
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => destroyDiary(userId, diaryId, setTrigger, navigate)}
                      // onClick={sendFormData}
                      sx={{ mt: 3, mb: 2 }}
                    >
                      削除する
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => updateDiary(userId, diaryId, setTrigger, navigate, mealtime, eatOn, mainmenu, sidemenu, image)}
                      // onClick={sendFormData}
                      sx={{ mt: 3, mb: 2 }}
                    >
                      更新する
                    </Button>
                  </Grid>
                </Grid>
                <Button onClick={confirmButton}
                >
                  kakuninn
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
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
