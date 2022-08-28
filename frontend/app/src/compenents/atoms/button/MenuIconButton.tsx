import { HamburgerIcon } from "@chakra-ui/icons";
import { FC, memo } from "react";

type Props = {
  onOpen: () => void;
}

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <HamburgerIcon area-label="メニューボタン" w={6} h={6} display={{ base: "block", md: "none" }} onClick={onOpen} />
  )
})
