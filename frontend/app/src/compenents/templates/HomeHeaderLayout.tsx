import { FC, memo, ReactNode } from "react";
import Box from '@mui/material/Box';

import { HomeHeader } from "../organisms/layout/HomeHeader";

type Props = {
  children: ReactNode;
}

export const HomeHeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <HomeHeader />
      <Box component="main" sx={{ p: 13 }}>
        {children}
      </Box>
    </>
  )
})
