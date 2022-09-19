import { FC, memo, ReactNode } from "react";

import { HomeHeader } from "../organisms/layout/HomeHeader";

type Props = {
  children: ReactNode;
}

export const HomeHeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <HomeHeader />
      {children}
    </>
  )
})
