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
import { useRef } from "react";

export const ListAdd = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
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
              <FormLabel>商品名</FormLabel>
              <Input ref={initialRef} placeholder='Name' />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              登録
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )


}
