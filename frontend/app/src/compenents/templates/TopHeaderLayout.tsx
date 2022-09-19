import { FC, memo, ReactNode } from "react";

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
    </>
  )
})