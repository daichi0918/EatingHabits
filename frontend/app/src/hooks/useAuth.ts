import axios from "axios";
import { useCallback } from "react"
import { useNavigate } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage"

export const useAuth = () => {
  const { showMessage } = useMessage();
  // const login = useCallback((id: string) => {
  //   axios.get<User>(`http://localhost:3002/api/v1/users`).then((res) => {

  //   })
  // }, []);
  // return { login }
  // const navigate = useNavigate();
  // navigate("/home");
  // return
}
