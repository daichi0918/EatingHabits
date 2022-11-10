import axios from "axios";
import { useCallback, useState } from "react";
import Cookies from "js-cookie"

import { FoodType } from "../types/api/food";
import { foodEdit } from "../urls/index"

export const useEditFood = () => {
  const [loading, setLoading] = useState(false);
  // const [food, setLists] = useState<Array<FoodType>>([]);
  const [error, setError] = useState(false);

  let food = ""

  const editFood = useCallback((userId: string | undefined, id: string | undefined, locationFoodId: string, setEditFood: any, setName: any, setClassification: any, setQuantity: any, setLimitDate: any, setAlertDate: any, setImage: any, setMemo: any) => {
    setLoading(true);
    setError(false);
    if (id == undefined) {
      id = locationFoodId
    }
    axios.get<any>(foodEdit(userId, id), {
      headers: {
        "access-token": Cookies.get("_access_token") as any,
        "client": Cookies.get("_client") as any,
        "uid": Cookies.get("_uid") as any,
        "content-type": "application/json"
      }
    }).then((res) => {
      setName(res.data.food.name)
      setClassification(res.data.food.classification_id)
      setQuantity(res.data.food.quantity)
      setLimitDate(res.data.food.expired_at)
      setAlertDate(res.data.food.notified_at)
      setImage(res.data.food.image)
      setMemo(res.data.food.memo)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { editFood, loading }
}
