import { FC, memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Home: FC = memo(() => {
  return (
    <HeaderLayout>
      <p>ホームページ</p>
    </HeaderLayout>
  )
})
