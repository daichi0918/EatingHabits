import { FC } from "react";
import { UserType } from "./types/user";

export const User: FC<Pick<UserType, "name" | "email">> = (props) => {
  const { name, email } = props;
  return (
    <>
      <p>{`ユーザー名：${name}`}</p>
      <p>{`メールアドレス:${email}`}</p>
    </>
  )
}
