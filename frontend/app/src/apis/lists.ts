import axios from "axios";
import { listCreate } from "../urls";

export const createList = (userId: string | undefined, text: string | undefined, lists: any, setLists: any, onClose: any) => {
  return axios.post(listCreate(userId), {
    name: text
  }).then(() => {
    onClose
    setLists(...lists, text);
  })
    .catch((e) => console.error(e))
}
