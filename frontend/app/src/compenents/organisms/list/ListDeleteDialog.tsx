import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRef, useState } from "react";
import { createList, destroyList } from "../../../apis/lists";

export const ListDeleteDialog = (props: any) => {
  const { userId, id, setTrigger } = props;
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [dialog, setDialog] = useState(false);

  const OpenDialog = () => setDialog(true);

  const CloseDialog = () => setDialog(false);

  console.log(id);

  return (
    <>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon onClick={OpenDialog} />
        </IconButton>
      </Tooltip>
      <Dialog
        open={dialog}
        onClose={CloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          確認
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            削除してよろしいですか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={CloseDialog}>Cancel</Button>
          <Button onClick={() => destroyList(userId, id, setTrigger)} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

    </>
  )
}
