import axios from "axios";
import { listCreate, listDestroy } from "../urls";
import Cookies from "js-cookie"

export const createList = (userId: string | undefined, text: string | undefined, setTrigger: any) => {

  const headers = {
    "access-token": Cookies.get("_access_token") as any,
    "client": Cookies.get("_client") as any,
    "uid": Cookies.get("_uid") as any,
    "content-type": "application/json"
  }

  return axios.post(listCreate(userId), {
    name: text
  }, { headers: headers }).then(() => {
    setTrigger((prev: any) => { return !prev });
  })
    .catch((e) => console.error(e))
}

export const destroyList = (userId: string | undefined, id: string | undefined, setTrigger: any) => {

  const headers = {
    "access-token": Cookies.get("_access_token") as any,
    "client": Cookies.get("_client") as any,
    "uid": Cookies.get("_uid") as any,
    "content-type": "application/json"
  }

  return axios.delete(listDestroy(userId, id), { headers: headers })
    .then(() => {
      setTrigger((prev: any) => { return !prev });
    })
    .catch((e) => console.error(e))
}
