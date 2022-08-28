import { Box, Button, Drawer, DrawerOverlay, Flex, Heading, IconButton, Link, DrawerBody, useDisclosure, DrawerContent, useFocusEffect } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"
import { FC, memo, useEffect } from "react";
import axios from "axios";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickButton = () => {
    axios.get<any>("http://localhost:3002/api/v1/users").then((res) => {
      console.log(res)
    })
  }

  useEffect(() => {
    axios.get<any>("http://localhost:3002/api/v1/users").then((res) => {
      console.log(res)
    })
  }, [])



  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            EHmanger
        </Heading>
        </Flex>

        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link onClick={() => onClickButton}>ユーザー一覧</Link>
          </Box>
          {/* <Link>ユーザー一覧</Link> */}
        </Flex>
        <HamburgerIcon area-label="メニューボタン" w={6} h={6} display={{ base: "block", md: "none" }} onClick={onOpen} />
      </Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">TOP</Button>
              <Button w="100%">ユーザー一覧</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
})
