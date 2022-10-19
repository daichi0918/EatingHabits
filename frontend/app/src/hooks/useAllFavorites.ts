import axios from "axios";
import { useCallback, useState } from "react";

import { FoodType } from "../types/api/food";
import { favoritesIndex } from "../urls/index"

export const useAllFavorites = () => {
  const [favoriteLoading, setFavoriteLoading] = useState(false);
  // const [food, setLists] = useState<Array<FoodType>>([]);
  const [error, setError] = useState(false);

  const getFavorites = useCallback((postId: string | undefined, favorites: Array<any>, setFavorites: any) => {
    setFavoriteLoading(true);
    setError(false);
    axios.get<any>(favoritesIndex(postId)).then((res) => {
      setFavorites(res.data)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setFavoriteLoading(false);
    })
  }, [])

  return { getFavorites, favoriteLoading }
}
