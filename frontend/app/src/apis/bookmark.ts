import axios from "axios";
import { bookmarkCretate } from "../urls";
import Cookies from "js-cookie"


export const createBookmark = (userId: string | undefined, postId: string | undefined) => {

  const headers = {
    "access-token": Cookies.get("_access_token") as any,
    "client": Cookies.get("_client") as any,
    "uid": Cookies.get("_uid") as any,
    "content-type": "application/json"
  }

  return axios.post(bookmarkCretate(postId), {
    user_id: userId,
    post_id: postId
  }, { headers: headers }).then(() => {
    // setTrigger((prev: any) => { return !prev });
  })
    .catch((e) => console.error(e))
}
