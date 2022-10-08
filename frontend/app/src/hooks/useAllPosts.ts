import axios from "axios";
import { useCallback, useState } from "react";

import { PostType } from "../types/api/post";
import { postsIndex } from "../urls/index"

export const useAllPosts = () => {
  const [loading, setLoading] = useState(false);
  // const [food, setLists] = useState<Array<FoodType>>([]);
  const [error, setError] = useState(false);

  const getPosts = useCallback((setPosts: any) => {
    setLoading(true);
    setError(false);
    axios.get<any>(postsIndex).then((res) => {
      setPosts(res.data.posts)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { getPosts, loading }
}
