import { AddIcon } from "@chakra-ui/icons";
import {
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { createList } from "../../../apis/lists";

export const ListAdd = (props: any) => {

  const { userId, lists, setLists } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("");
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <IconButton
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
            <Button colorScheme='teal' mr={3} onClick={() => { createList(userId, text, lists, setLists, onClose) }}>
              登録
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )


}
