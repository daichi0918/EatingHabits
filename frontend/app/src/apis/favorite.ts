import axios from "axios";
import Cookies from "js-cookie"

import { favoriteCretate, favoriteDestroy } from "../urls";


export const createFavorite = (userId: string | undefined, postId: string | undefined, setFavoriteTrigger: React.Dispatch<React.SetStateAction<boolean>>) => {

  const headers = {
    "access-token": Cookies.get("_access_token") as any,
    "client": Cookies.get("_client") as any,
    "uid": Cookies.get("_uid") as any,
    "content-type": "application/json"
  }

  return axios.post(favoriteCretate(postId), {
    user_id: userId,
    post_id: postId
  }, { headers: headers }).then(() => {
    setFavoriteTrigger((prev: any) => { return !prev });
    // console.log("favorite add")
  })
    .catch((e) => console.error(e))
}

export const destroyFavorite = (favoriteId: string | undefined, postId: string | undefined, setFavoriteTrigger: React.Dispatch<React.SetStateAction<boolean>>) => {

  const headers = {
    "access-token": Cookies.get("_access_token") as any,
    "client": Cookies.get("_client") as any,
    "uid": Cookies.get("_uid") as any,
    "content-type": "application/json"
  }

  return axios.delete(favoriteDestroy(favoriteId, postId), { headers: headers })
    .then(() => {
      console.log("favorite destroy")
      setFavoriteTrigger((prev: any) => { return !prev });
    })
    .catch((e) => console.error(e))
}
