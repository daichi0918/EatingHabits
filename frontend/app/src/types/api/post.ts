export type PostType = {
  id: number,
  user_id: number,
  text: string,
  image: {
    url: string
  } | null,
  created_at: string,
  updated_at: string,
  title: string
};
