type UserType = {
  // id: number;
  name: string;
  // email: string;
  // encrypted_password: string;
  // gender: string;
  // image: string;
  // memo: string;
  // created_at: string;
  // updated_at: string;
}

export const User = (props: UserType) => {
  const { name } = props;
  return <p>{`ユーザー名：${name}`}</p>
}
