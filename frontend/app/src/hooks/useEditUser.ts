import axios from "axios";
import { useCallback, useState } from "react";

import { editUser } from "../types/api/user";
import { userEdit } from "../urls/index"

export const useEditUser = () => {
  const [loading, setLoading] = useState(false);
  // const [user, setLists] = useState<Array<FoodType>>([]);
  const [error, setError] = useState(false);

  const editUser = useCallback((userId: string | undefined, setName: React.Dispatch<React.SetStateAction<string>>, setGender: React.Dispatch<React.SetStateAction<number>>, setDate: React.Dispatch<React.SetStateAction<string>>, setImage: React.Dispatch<React.SetStateAction<string | null>>, setMemo: React.Dispatch<React.SetStateAction<string>>) => {
    setLoading(true);
    setError(false);
    axios.get<any>(userEdit(userId)).then((res) => {
      // setEditFood(res.data.user)
      setName(res.data.user.name)
      setGender(res.data.user.gender)
      setDate(res.data.user.birthday)
      setImage(res.data.user.image)
      setMemo(res.data.user.memo)
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { editUser, loading }
}
