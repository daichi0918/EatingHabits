import { UserType } from "./types/user";

export const User = (props: Pick<UserType, "name" | "email">) => {
  const { name, email } = props;
  return (
    <>
      <p>{`ユーザー名：${name}`}</p>
      <p>{`メールアドレス:${email}`}</p>
    </>
  )
}
