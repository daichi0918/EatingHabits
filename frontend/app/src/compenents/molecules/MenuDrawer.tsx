import { FC, memo } from "react";
// import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickUserManagement } = props;
  return (
    // <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
    //   <DrawerOverlay>
    //     <DrawerContent>
    //       <DrawerBody p={0} bg="gray.100">
    //         <Button w="100%" onClick={onClickHome}>TOP</Button>
    //         <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button>
    //       </DrawerBody>
    //     </DrawerContent>
    //   </DrawerOverlay>
    // </Drawer>
    <div>menudrawer</div>
  )
})
