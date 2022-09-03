import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";

export const useAllUsers = () => {
  // const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const [error, setError] = useState(false);

  const getUsers = useCallback(() => {
    setLoading(true);
    setError(false);
    axios.get<any>("http://localhost:3002/api/v1/users").then((res) => {
      // const data = res.data.users.map((user: any) => ({
      //   name: user.name,
      //   email: user.email
      // }));
      setUsers(res.data.users);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return { getUsers, users, loading }
}
