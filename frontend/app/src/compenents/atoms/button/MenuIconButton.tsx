// import { HamburgerIcon } from "@chakra-ui/icons";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton } from '@mui/material';
import { FC, memo } from "react";

type Props = {
  onOpen: () => void;
}

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        onClick={onOpen}
        size="large"
        aria-label="メニューボタン"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
    </Box>
  )
})
