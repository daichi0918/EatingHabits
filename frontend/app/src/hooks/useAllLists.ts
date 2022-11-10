import axios from "axios";
import { useCallback, useState } from "react";
import Cookies from "js-cookie"

import { ListType } from "../types/api/list";
import { listsIndex } from "../urls/index"

export const useAllLists = () => {
  const [loading, setLoading] = useState(false);
  // const [lists, setLists] = useState<Array<List>>([]);
  const [error, setError] = useState(false);

  const getLists = useCallback((userId: string | undefined, setLists: any) => {
    setLoading(true);
    setError(false);
    axios.get<any>(listsIndex(userId), {
      headers: {
        "access-token": Cookies.get("_access_token") as any,
        "client": Cookies.get("_client") as any,
        "uid": Cookies.get("_uid") as any,
        "content-type": "application/json"
      }
    }).then((res) => {
      setLists(res.data.lists);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { getLists, loading }
}
