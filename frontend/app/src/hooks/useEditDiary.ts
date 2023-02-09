import axios from "axios";
import { useCallback, useState } from "react";
import Cookies from "js-cookie"

import { DiaryIndexType } from "../types/api/diary";
import { diaryEdit } from "../urls/index"

export const useEditDiary = () => {
  const [loading, setLoading] = useState(false);
  // const [food, setLists] = useState<Array<FoodType>>([]);
  const [error, setError] = useState(false);

  const editDiary = useCallback((userId: string | undefined, diaryId: string | undefined, setMealtime: React.Dispatch<React.SetStateAction<string | undefined>>, setEatOn: React.Dispatch<React.SetStateAction<string>>, setMainmenu: React.Dispatch<React.SetStateAction<string>>, setSidemenu: React.Dispatch<React.SetStateAction<string>>, setImage: React.Dispatch<React.SetStateAction<string>>) => {
    setLoading(true);
    setError(false);
    axios.get<any>(diaryEdit(userId, diaryId), {
      headers: {
        "access-token": Cookies.get("_access_token") as any,
        "client": Cookies.get("_client") as any,
        "uid": Cookies.get("_uid") as any,
        "content-type": "application/json"
      }
    }).then((res) => {

      setMealtime(res.data.diary.mealtime_id)
      setEatOn(res.data.diary.eat_on)
      setMainmenu(res.data.diary.main_menu)
      setSidemenu(res.data.diary.side_menu)
      setImage(res.data.diary.image.url)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { editDiary, loading }
}
