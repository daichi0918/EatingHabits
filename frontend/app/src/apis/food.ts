import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs, { Dayjs } from 'dayjs';
import Cookies from "js-cookie"

import { AuthContext } from "../App";
import { FoodContext } from "../providers/FoodProvider";
import { foodCreate, foodDestroy, foodUpdate } from "../urls";
import { FoodType } from "../types/api/food"





export const createFood = (userId: string | undefined, setTrigger: any, navigate: any, name: string | Blob, classification: string | Blob, quantity: string | Blob, limitDate: string | Blob, alertDate: string | Blob, image: string | Blob, memo: string | Blob) => {

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
    formData.append('classification_id', classification)
    formData.append('quantity', quantity)
    formData.append('expired_at', limitDate)
    formData.append('notified_at', alertDate)
    formData.append('image', image)
    formData.append('memo', memo)

    return formData
  }

  const data = createFormData()

  return axios.post(foodCreate(userId), data, { headers: headers })
    .then(() => {
      setTrigger((prev: any) => { return !prev });
      navigate("/home/food")
    })
    .catch((e) => console.error(e))
}

export const updateFood = (id: string | undefined, userId: string | undefined, setTrigger: any, navigate: any, name: string | undefined, classification: number | undefined, quantity: number | undefined, limitDate: Dayjs | null, alertDate: Dayjs | null, image: string | undefined, memo: string | undefined) => {

  const headers = {
    "access-token": Cookies.get("_access_token") as any,
    "client": Cookies.get("_client") as any,
    "uid": Cookies.get("_uid") as any,
    "content-type": "application/json"
  }

  return axios.put(foodUpdate(userId, id), {
    name: name,
    classification_id: classification,
    quantity: quantity,
    expired_at: limitDate,
    notified_at: alertDate,
    image: image,
    memo: memo
  }, { headers: headers }).then(() => {
    setTrigger((prev: any) => { return !prev });
    navigate("/home/food")
  })
    .catch((e) => console.error(e))
}

export const destroyFood = (userId: string | undefined, id: string | undefined, setTrigger: any) => {

  const headers = {
    "access-token": Cookies.get("_access_token") as any,
    "client": Cookies.get("_client") as any,
    "uid": Cookies.get("_uid") as any,
    "content-type": "application/json"
  }

  return axios.delete(foodDestroy(userId, id), { headers: headers })
    .then(() => {
      setTrigger((prev: any) => { return !prev });
    })
    .catch((e) => console.error(e))
}
