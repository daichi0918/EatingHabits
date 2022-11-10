import axios from "axios";
import { useCallback, useState } from "react";
import Cookies from "js-cookie"

import { FoodType } from "../types/api/food";
import { favoritesIndex } from "../urls/index"

export const useAllFavorites = () => {
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  // const [food, setLists] = useState<Array<FoodType>>([]);
  const [error, setError] = useState(false);

  const getFavorites = useCallback((postId: string | undefined, setFavorites: any) => {
    setFavoriteLoading(true);
    setError(false);
    axios.get<any>(favoritesIndex(postId), {
      headers: {
        "access-token": Cookies.get("_access_token") as any,
        "client": Cookies.get("_client") as any,
        "uid": Cookies.get("_uid") as any,
        "content-type": "application/json"
      }
    }).then((res) => {
      setFavorites(res.data)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setFavoriteLoading(false);
    })
  }, [])

  return { getFavorites, favoriteLoading }
}
