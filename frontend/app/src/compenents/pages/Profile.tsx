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
// import Image from 'react-image-resizer';

import { signUp } from "../../apis/auth";
import { AuthContext } from "../../App";
import { SignUpParams } from "../../types/api/auth";
import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";
import { updateFood } from "../../apis/food";
import { FoodContext } from "../../providers/FoodProvider";
import { useEditFood } from "../../hooks/useEditFood";
import user from "../../images/user.png";

export const Profile = () => {

  const { userId } = useContext(AuthContext);
  const { foodId, foodEdit, setFoodEdit, trigger, setTrigger } = useContext(FoodContext);

  // const { editFood, loading } = useEditFood();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState(null)
  const [memo, setMemo] = useState("");
  const [preview, setPreview] = useState("");



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

  // useEffect(() => { editFood(userId, foodId, setFoodEdit, setName, setClassification, setQuantity, setLimitDate, setAlertDate, setImage, setMemo) }, [])


  console.log("abc:" + name)

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
                    {/* <TextField
                      required
                      fullWidth
                      id="Name"
                      label="編集名称"
                      name="name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    /> */}
                    {/* <CardMedia
                      component="img"
                      height="500"
                      // image={image?.url}
                      image={user}
                      alt="No Image"
                      sx={{
                        borderRadius: "50%"
                      }}
                    /> */}
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
                        hidden
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
                      value={memo}
                      onChange={(e) => setMemo(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  fullWidth
                  variant="contained"
                  // onClick={() => updateFood(foodId, userId, setTrigger, navigate, name, classification, quantity, limitDate, alertDate, image, memo)}
                  sx={{ mt: 3, mb: 2 }}
                >
                  更新する
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
