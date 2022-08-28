import { FC, memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";

export const UserManagement: FC = memo(() => {
  return (
    <HeaderLayout>
      <p>ユーザー管理ページ</p>
    </HeaderLayout>
  )
})
