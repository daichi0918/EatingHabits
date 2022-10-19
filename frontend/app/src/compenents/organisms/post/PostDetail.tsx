import { useState } from "react";
import Button from '@mui/material/Button';
import { styled, createTheme } from '@mui/material/styles';
import { createList } from "../../../apis/lists";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Stack } from "@mui/material";


export const PostDetail = (props: any) => {

  const { title, image, text } = props;

  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = createTheme({
    palette: {
      text: {
        disabled: 'black',
      },
    },
  })

  const DarkerDisabledTextField = styled(TextField)(() => ({
    marginTop: 1,
    "& .Mui-disabled": {
      color: "black",// (default alpha is 0.38)
      // text: {
      //   color: 'black'
      // }
    }
  }))

  const DetailButton = styled(Button)(() => ({
    marginRight: 0,
    marginLeft: 5
  }))


  return (
    <>
      <Button
        variant="contained"
        sx={{
          ml: 8,
          mr: 0
        }}
        onClick={handleClickOpen}
      >
        memo
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent>
          <img
            style={{ width: 'auto', height: '100%' }}
            src={image?.url}
            alt="image"
          />
          <DarkerDisabledTextField
            theme={theme}
            id="outlined-multiline-static"
            label="memo"
            multiline
            rows={8}
            sx={{
              width: 500,
              mx: 5,
              my: 5
            }}
            value={text}
            disabled={disabled}
          />
          {/* <Typography
            sx={{
              width: 500,
              mx: 5,
              my: 5
            }}

          >
            {text}
          </Typography> */}
        </DialogContent>
        <Stack
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              mt: 1,
              mb: 1
            }}
          >
            CLOSE
          </Button>
        </Stack>
      </Dialog>

    </>
  )
}
