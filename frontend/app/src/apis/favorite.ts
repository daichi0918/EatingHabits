import axios from "axios";
import { favoriteCretate, favoriteDestroy } from "../urls";


export const createFavorite = (userId: string | undefined, postId: string | undefined, setFavoriteTrigger: React.Dispatch<React.SetStateAction<boolean>>) => {

  return axios.post(favoriteCretate(postId), {
    user_id: userId,
    post_id: postId
  }).then(() => {
    setFavoriteTrigger((prev: any) => { return !prev });
    // console.log("favorite add")
  })
    .catch((e) => console.error(e))
}

export const destroyFavorite = (favoriteId: string | undefined, postId: string | undefined, setFavoriteTrigger: React.Dispatch<React.SetStateAction<boolean>>) => {
  return axios.delete(favoriteDestroy(favoriteId, postId))
    .then(() => {
      console.log("favorite destroy")
      setFavoriteTrigger((prev: any) => { return !prev });
    })
    .catch((e) => console.error(e))
}
