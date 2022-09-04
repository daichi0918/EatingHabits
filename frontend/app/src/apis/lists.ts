import axios from "axios";
import { listCreate, listDestroy } from "../urls";

export const createList = (userId: string | undefined, text: string | undefined, setTrigger: any) => {
  return axios.post(listCreate(userId), {
    name: text
  }).then(() => {
    setTrigger((prev: any) => { return !prev });
  })
    .catch((e) => console.error(e))
}

export const destroyList = (userId: string | undefined, id: string | undefined, setTrigger: any) => {
  return axios.delete(listDestroy(userId, id))
    .then(() => {
      setTrigger((prev: any) => { return !prev });
    })
    .catch((e) => console.error(e))
}
