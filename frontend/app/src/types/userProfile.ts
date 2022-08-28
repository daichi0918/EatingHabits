export type UserProfile = {

  users: [
    {
      id: number,
      name: string,
      email: string,
      encrypted_password: string,
      gender: string,
      image: string,
      memo: string,
      created_at: string,
      updated_at: string
    }
  ]
};
