import axios from "axios";
import dayjs, { Dayjs } from 'dayjs';

import { userUpdate } from "../urls";

export const updateUser = (userId: string | undefined, name: string, gender: string, date: string | Blob, image: string, memo: string | Blob, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => {

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

  return axios.put(userUpdate(userId), data)
    .then(() => {
      setTrigger((prev: any) => { return !prev });
    })
    .catch((e) => console.error(e))
    .catch((e) => console.error(e))
}
