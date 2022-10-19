export type FoodType = {
  id: number,
  user_id: number,
  classification_id: number,
  name: string,
  quantity: string,
  expired_at: string,
  notified_at: string,
  image: {
    url: string
  } | null,
  memo: string,
  created_at: string,
  updated_at: string
};
