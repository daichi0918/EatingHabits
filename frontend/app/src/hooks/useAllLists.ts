import axios from "axios";
import { useCallback, useState } from "react";

import { List } from "../types/api/list";
import { listsIndex } from "../urls/index"

export const useAllLists = () => {
  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState<Array<List>>([]);
  const [error, setError] = useState(false);

  const getLists = useCallback(() => {
    setLoading(true);
    setError(false);
    axios.get<any>(listsIndex("1")).then((res) => {
      setLists(res.data.lists);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { getLists, lists, loading }
}
