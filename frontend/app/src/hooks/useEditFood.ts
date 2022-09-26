import axios from "axios";
import { useCallback, useState } from "react";

import { FoodType } from "../types/api/food";
import { foodEdit } from "../urls/index"

export const useEditFood = () => {
  const [loading, setLoading] = useState(false);
  // const [food, setLists] = useState<Array<FoodType>>([]);
  const [error, setError] = useState(false);

  let food = ""

  const editFood = useCallback((userId: string | undefined, id: string | undefined, setEditFood: any) => {
    setLoading(true);
    setError(false);
    axios.get<any>(foodEdit(userId, id)).then((res) => {
      console.log(res)
      setEditFood(res.data.food)
      console.log("EditFood:" + res.data)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { editFood, loading }
}
