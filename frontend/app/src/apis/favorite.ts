import axios from "axios";
import { favoriteCretate } from "../urls";


export const createFavorite = (userId: string | undefined, postId: string | undefined) => {

  return axios.post(favoriteCretate(postId), {
    user_id: userId,
    post_id: postId
  }).then(() => {
    // setTrigger((prev: any) => { return !prev });
    console.log("favorite add")
  })
    .catch((e) => console.error(e))
}
