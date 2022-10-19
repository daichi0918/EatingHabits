import axios from "axios";
import { useContext, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import dayjs, { Dayjs } from 'dayjs';

import { AuthContext } from "../App";
import { FoodContext } from "../providers/FoodProvider";
import { postCreate, postDestroy, postUpdate } from "../urls";
import { PostType } from "../types/api/post"





export const createPost = (setTrigger: React.Dispatch<React.SetStateAction<boolean>>, userId: any, title: string | Blob, image: File | undefined, text: string | Blob, navigate: NavigateFunction) => {
  // export const createPost = (setTrigger: any, title: any, image: any, text: any, navigate: any) => {
  const createFormData = () => {
    const formData = new FormData()
    if (!image) return
    formData.append('user_id', userId)
    formData.append('title', title)
    formData.append('image', image)
    formData.append('text', text)

    return formData
  }

  const data = createFormData()

  return axios.post(postCreate, data)
    .then(() => {
      setTrigger((prev: any) => { return !prev });
      navigate("/home/post")
    })
    .catch((e) => console.error(e))
}
