import axios from "axios";
import { useCallback, useState } from "react";

import { DiaryIndexType } from "../types/api/diary";
import { diariesIndex } from "../urls/index"

export const useAllDiaries = () => {
  const [loading, setLoading] = useState(false);
  // const [food, setLists] = useState<Array<FoodType>>([]);
  const [error, setError] = useState(false);

  const getDiaries = useCallback((userId: string | undefined, setDiaries: any) => {
    setLoading(true);
    setError(false);
    axios.get<any>(diariesIndex(userId)).then((res) => {
      console.log(res)
      setDiaries(res.data.diaries)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { getDiaries, loading }
}
