import { FC, memo, ReactNode } from "react";

import { Header } from "../organisms/layout/TopHeader";

type Props = {
  children: ReactNode;
}

export const TopHeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  )
})
