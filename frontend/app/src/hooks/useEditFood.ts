import axios from "axios";
import { useCallback, useState } from "react";

import { FoodType } from "../types/api/food";
import { foodEdit } from "../urls/index"

export const useEditFood = () => {
  const [loading, setLoading] = useState(false);
  // const [food, setLists] = useState<Array<FoodType>>([]);
  const [error, setError] = useState(false);

  let food = ""

  const editFood = useCallback((userId: string | undefined, id: string | undefined, setEditFood: any, setName: any, setClassification: any, setQuantity: any, setLimitDate: any, setAlertDate: any, setImage: any, setMemo: any) => {
    console.log("editFood")
    setLoading(true);
    setError(false);
    axios.get<any>(foodEdit(userId, id)).then((res) => {
      console.log(res)
      // setEditFood(res.data.food)
      setName(res.data.food.name)
      setClassification(res.data.food.classification_id)
      console.log("classification:" + res.data.food.classification_id)
      setQuantity(res.data.food.quantity)
      setLimitDate(res.data.food.expired_at)
      setAlertDate(res.data.food.notified_at)
      setImage(res.data.food.image)
      console.log("image:" + res.data.food.image)
      setMemo(res.data.food.memo)
      console.log("EditFood:" + res.data)
      console.log("EditFoodName:" + res.data.food.name)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { editFood, loading }
}
