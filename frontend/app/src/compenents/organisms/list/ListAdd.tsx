import { useRef, useState } from "react";
import { styled } from '@mui/material/styles';
import { createList } from "../../../apis/lists";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { AddButton } from "../../atoms/button/AddButton"
import { ListType } from "../../../types/api/list";

type Props = {
  userId: string | undefined;
  lists: Array<ListType>;
  setLists: React.Dispatch<React.SetStateAction<Array<ListType>>>;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ListAdd = (props: Props) => {

  const { userId, lists, setLists, setTrigger } = props;

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AddButton onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="string"
            fullWidth
            variant="standard"
            onChange={(event) => setText(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => { createList(userId, text, setTrigger) }}>登録</Button>
        </DialogActions>
      </Dialog>
    </>
  )


}
