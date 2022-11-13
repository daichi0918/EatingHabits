import { FC, memo, ReactNode } from "react";
import Box from '@mui/material/Box';

import { TopHeader } from "../organisms/layout/TopHeader";

type Props = {
  children: ReactNode;
}

export const TopHeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <TopHeader />
      {children}
      {/* <Box component="main" sx={{ p: 9 }}> */}

      {/* </Box> */}

    </>
  )
})
