import axios from "axios";
import { useCallback, useState } from "react";
import Cookies from "js-cookie"

import { FoodType } from "../types/api/food";
import { foodsIndex } from "../urls/index"

export const useAllFoods = () => {
  const [loading, setLoading] = useState(false);
  // const [food, setLists] = useState<Array<FoodType>>([]);
  const [error, setError] = useState(false);

  const getFoods = useCallback((userId: string | undefined, setFoods: any) => {
    setLoading(true);
    setError(false);
    axios.get<any>(foodsIndex(userId), {
      headers: {
        "access-token": Cookies.get("_access_token") as any,
        "client": Cookies.get("_client") as any,
        "uid": Cookies.get("_uid") as any,
        "content-type": "application/json"
      }
    }).then((res) => {
      setFoods(res.data.foods)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { getFoods, loading }
}
