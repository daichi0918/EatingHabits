import { FC, memo, ReactNode } from "react";
import Box from '@mui/material/Box';

import { TopHeader } from "../organisms/layout/TopHeader";
import { TopFooter } from "../organisms/layout/TopFooter";

type Props = {
  children: ReactNode;
}

export const TopHeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <TopHeader />
      {children}
    </>
  )
})
