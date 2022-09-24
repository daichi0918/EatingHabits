import axios from "axios";
import { foodCreate, foodDestroy } from "../urls";

export const createFood = (userId: string | undefined, text: string | undefined, setTrigger: any) => {
  return axios.post(foodCreate(userId), {
    name: text
  }).then(() => {
    setTrigger((prev: any) => { return !prev });
  })
    .catch((e) => console.error(e))
}

export const destroyFood = (userId: string | undefined, id: string | undefined, setTrigger: any) => {
  return axios.delete(foodDestroy(userId, id))
    .then(() => {
      setTrigger((prev: any) => { return !prev });
    })
    .catch((e) => console.error(e))
}
