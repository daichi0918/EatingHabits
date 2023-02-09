export type User = {
  id: number,
  name: string,
  email: string,
  encrypted_password: string,
  gender: string,
  image: string,
  memo: string,
  created_at: string,
  updated_at: string
};

export type editUser = {
  id: number,
  provider: string,
  uid: string
  allow_password_change: boolean,
  name: string,
  image: {
    url: string | null
  },
  email: string,
  created_at: string,
  updated_at: string,
  gender: string,
  memo: string,
  birthday: string
}
