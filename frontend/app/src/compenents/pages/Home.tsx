import axios from "axios";
import { FC, memo } from "react";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Home: FC = memo(() => {
  // axios.get<any>("http://localhost:3002/api/v1/users").then((res) => {
  //   console.log(res);
  //   const data = res.data.users.map((user: any) => ({
  //     name: user.name,
  //     email: user.email
  //   }));
  return (
    <HeaderLayout>
      <p>ホームページ</p>
    </HeaderLayout>
  )
})
