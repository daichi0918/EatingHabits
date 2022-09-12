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
import { createList } from "../../../apis/lists";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export const ListAdd = (props: any) => {

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

  return (
    <>
      {/* <IconButton
        aria-label='add-icon'
        colorScheme='teal'
        icon={<AddIcon />}
        borderRadius="full"
        size="lg"
        onClick={onOpen}
      />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Subscribe</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input ref={initialRef} placeholder='Name' value={text}
                onChange={(event) => setText(event.target.value)} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='teal' mr={3} onClick={() => { createList(userId, text, setTrigger) }}>
              登録
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      <AddCircleIcon onClick={handleClickOpen} sx={{ fontSize: 50 }} color="primary" style={{ marginLeft: '830px' }} />

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
