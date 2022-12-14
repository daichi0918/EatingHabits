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
  // const [noUploadImage, setNoUploadImage] = useState<string>("")
  const [memo, setMemo] = useState<string>("");
  const [preview, setPreview] = useState("");
  const [trigger, setTrigger] = useState(false);




  // const uploadImage = useCallback((e: any) => {
  //   const file = e.target.files[0]
  //   setImage(e.target.files[0]);
  //   console.log("file:" + file)
  //   console.log("image:" + image)
  // }, [])

  // ?????????????????????
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
                        ????????????????????????
                      </Grid>
                      <Grid item xs={12}>
                        <img
                          alt="No Image"
                          src={image?.url != null ? image?.url : nouser}
                          width="250"
                          height="250"
                          style={{ borderRadius: "50%" }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {/* <TextField
                      required
                      fullWidth
                      id="Name"
                      label="???????????????"
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
                            // hidden
                            // value={image}
                            onChange={(e: any) => {
                              // uploadImage(e)
                              // previewImage(e)
                              setUploadImage(e.target.files[0])
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
                        label="???????????????"
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
                          ??????????????????
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
                          ????????????
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="Name"
                          label="??????"
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
                          <InputLabel id="demo-select-small">??????</InputLabel>
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
                            <MenuItem value={0}>?????????</MenuItem>
                            <MenuItem value={1}>??????</MenuItem>
                            <MenuItem value={2}>??????</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          size="small"
                          id="date"
                          label="?????????"
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
                          label="??????????????????"
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
                      ????????????
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
