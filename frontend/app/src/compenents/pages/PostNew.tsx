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
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { signUp } from "../../apis/auth";
import { AuthContext } from "../../App";
import { SignUpParams } from "../../types/api/auth";
import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";
import { createPost } from "../../apis/post";
import { PostContext } from "../../providers/PostProvider";


export const PostNew = () => {

  const { userId } = useContext(AuthContext);
  const { setTrigger } = useContext(PostContext);

  const [title, setTitle] = useState<string>("")
  const [image, setImage] = useState<File>()
  const [text, setText] = useState<string>("")
  const [preview, setPreview] = useState<string>("")

  const navigate = useNavigate();

  return (
    <HomeHeaderLayout>
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
                  id="Title"
                  label="title"
                  title="title"
                  autoComplete="title"
                  // value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="icon-button-file">
                  <input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={(e: any) => {
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
                  label="text"
                  multiline
                  rows="3"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                  // value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              onClick={() => createPost(setTrigger, userId, title, image, text, navigate)}
              sx={{ mt: 3, mb: 2 }}
            >
              追加する
              </Button>
          </Box>
        </Box>
      </Container>
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
    </HomeHeaderLayout>
  )
}
