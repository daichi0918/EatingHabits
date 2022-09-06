import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { usersIndex } from "../urls/index"

export const useAllUsers = () => {
  // const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const [error, setError] = useState(false);

  const getUsers = useCallback(() => {
    setLoading(true);
    setError(false);
    axios.get<any>(usersIndex).then((res) => {
      setUsers(res.data.users);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { getUsers, users, loading }
}
