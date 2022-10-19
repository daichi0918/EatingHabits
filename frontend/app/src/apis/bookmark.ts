import axios from "axios";
import { bookmarkCretate } from "../urls";


export const createBookmark = (userId: string | undefined, postId: string | undefined) => {

  return axios.post(bookmarkCretate(postId), {
    user_id: userId,
    post_id: postId
  }).then(() => {
    // setTrigger((prev: any) => { return !prev });
    console.log("bookmark add")
  })
    .catch((e) => console.error(e))
}
