import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from 'dayjs';

import { AuthContext } from "../App";
import { FoodContext } from "../providers/FoodProvider";
import { diaryCreate, diaryDestroy, diaryUpdate } from "../urls";
import { DiaryIndexType } from "../types/api/diary"



export const createDiary = (userId: string | undefined, setTrigger: any, navigate: any, mealtime: string | Blob, eatOn: string | Blob, mainmenu: string | Blob, sidemenu: string | Blob, image: string | Blob) => {

  const createFormData = () => {
    const formData = new FormData()
    if (!image) return
    formData.append('mealtime_id', mealtime)
    formData.append('eat_on', eatOn)
    formData.append('main_menu', mainmenu)
    formData.append('side_menu', sidemenu)
    formData.append('image', image)

    return formData
  }

  const data = createFormData()

  return axios.post(diaryCreate(userId), data)
    .then(() => {
      setTrigger((prev: any) => { return !prev });
      navigate("/home/daily")
    })
    .catch((e) => console.error(e))
}

export const updateDiary = (userId: string | undefined, diaryId: string | undefined, setTrigger: any, navigate: any, mealtime: string | Blob, eatOn: string | Blob, mainmenu: string | Blob, sidemenu: string | Blob, image: string | Blob) => {

  const createFormData = () => {
    const formData = new FormData()
    if (!image) return
    formData.append('mealtime_id', mealtime)
    formData.append('eat_on', eatOn)
    formData.append('main_menu', mainmenu)
    formData.append('side_menu', sidemenu)
    formData.append('image', image)

    return formData
  }

  const data = createFormData()

  return axios.put(diaryUpdate(userId, diaryId), data)
    .then(() => {
      setTrigger((prev: any) => { return !prev });
      navigate("/home/daily")
    })
    .catch((e) => console.error(e))
}

export const destroyDiary = (userId: string | undefined, id: string | undefined, setTrigger: any, navigate: any) => {
  return axios.delete(diaryDestroy(userId, id))
    .then(() => {
      setTrigger((prev: any) => { return !prev });
      navigate("/home/daily")
    })
    .catch((e) => console.error(e))
}
