import axios from "axios";
import dayjs, { Dayjs } from 'dayjs';
import Cookies from "js-cookie";

import { userUpdate } from "../urls";

export const updateUser = (userId: string | undefined, name: string, gender: string, date: string | Blob, image: string, memo: string | Blob, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => {

  const headers = {
    "access-token": Cookies.get("_access_token") as any,
    "client": Cookies.get("_client") as any,
    "uid": Cookies.get("_uid") as any,
    "content-type": "application/json"
  }

  const createFormData = () => {
    const formData = new FormData()
    if (!image) return
    formData.append('name', name)
    formData.append('gender', gender)
    formData.append('birthday', date)
    formData.append('image', image)
    formData.append('memo', memo)

    return formData
  }

  const data = createFormData()

  return axios.put(userUpdate(userId), data, { headers: headers })
    .then(() => {
      setTrigger((prev: any) => { return !prev });
    })
    .catch((e) => console.error(e))
    .catch((e) => console.error(e))
}

export const updateUserImage = (userId: string | undefined, image: string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => {

  const headers = {
    "access-token": Cookies.get("_access_token") as any,
    "client": Cookies.get("_client") as any,
    "uid": Cookies.get("_uid") as any,
    "content-type": "application/json"
  }

  const createFormData = () => {
    const formData = new FormData()
    if (!image) return
    formData.append('image', image)

    return formData
  }

  const data = createFormData()

  return axios.put(userUpdate(userId), data, { headers: headers })
    .then(() => {
      setTrigger((prev: any) => { return !prev });
    })
    .catch((e) => console.error(e))
    .catch((e) => console.error(e))

}

export const updateDeleteUserImage = (userId: string | undefined, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => {

  const headers = {
    "access-token": Cookies.get("_access_token") as any,
    "client": Cookies.get("_client") as any,
    "uid": Cookies.get("_uid") as any,
    "content-type": "application/json"
  }

  return axios.put(userUpdate(userId), {
    image: ""
  }, { headers: headers })
    .then(() => {
      setTrigger((prev: any) => { return !prev });
    })
    .catch((e) => console.error(e))
    .catch((e) => console.error(e))

}
