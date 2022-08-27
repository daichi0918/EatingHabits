import axios from "axios";
import { useState } from "react";
import { UserProfile } from "../types/userProfile";

export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);
    axios.get<any>("http://localhost:3002/api/v1/users").then((res) => {
      const data = res.data.users.map((user: UserProfile) => ({
        name: user.name,
        email: user.email
      }));
      setUserProfiles(data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    })
  }

  return { getUsers, userProfiles, loading, error }
}
