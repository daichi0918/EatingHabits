import axios from "axios";
import { useCallback, useState } from "react";
import Cookies from "js-cookie"

import { PostType } from "../types/api/post";
import { postsIndex } from "../urls/index"

export const useAllPosts = () => {
  const [loading, setLoading] = useState(false);
  // const [food, setLists] = useState<Array<FoodType>>([]);
  const [error, setError] = useState(false);

  const getPosts = useCallback((setPosts: any) => {
    setLoading(true);
    setError(false);
    axios.get<any>(postsIndex, {
      headers: {
        "access-token": Cookies.get("_access_token") as any,
        "client": Cookies.get("_client") as any,
        "uid": Cookies.get("_uid") as any,
        "content-type": "application/json"
      }
    }).then((res) => {
      setPosts(res.data.posts)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { getPosts, loading }
}
