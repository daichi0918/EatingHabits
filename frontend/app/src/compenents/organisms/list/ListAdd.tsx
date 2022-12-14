// import { AddIcon } from "@chakra-ui/icons";
// import {
//   IconButton,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,Ci
//   FormControl,
//   FormLabel,
//   Button,
//   Input,
// } from "@chakra-ui/react";
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

  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const StyledFab = styled(Fab)({
  //   position: 'fixed',
  //   zIndex: 1,
  //   top: 550,
  //   left: 600,
  //   right: 0,
  //   margin: '0 auto',
  // });

  return (
    <>
      <AddButton onClick={handleClickOpen} />
      {/* <StyledFab color="primary" aria-label="add">
        <AddIcon onClick={handleClickOpen} />
      </StyledFab> */}


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
          <Button onClick={() => { createList(userId, text, setTrigger) }}>??????</Button>
        </DialogActions>
      </Dialog>
    </>
  )


}
