import axios from "axios";
import { useCallback, useState } from "react";

import { ListType } from "../types/api/list";
import { listsIndex } from "../urls/index"

export const useAllLists = () => {
  const [loading, setLoading] = useState(false);
  // const [lists, setLists] = useState<Array<List>>([]);
  const [error, setError] = useState(false);

  const getLists = useCallback((userId: string | undefined, setLists: any) => {
    setLoading(true);
    setError(false);
    axios.get<any>(listsIndex(userId)).then((res) => {
      setLists(res.data.lists);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { getLists, loading }
}
