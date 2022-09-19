import { Button } from "@mui/material";
import axios from "axios";
import { FC, memo, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../App";
import { TopHeaderLayout } from "../templates/TopHeaderLayout";

export const Home: FC = memo(() => {
  const { userId } = useContext(AuthContext);
  // axios.get<any>("http://localhost:3002/api/v1/users").then((res) => {
  //   console.log(res);
  //   const data = res.data.users.map((user: any) => ({
  //     name: user.name,
  //     email: user.email
  //   }));
  return (
    <TopHeaderLayout>
      <Button
        variant="outlined"
        component={Link}
        to={`/home/list`}
      >
        List
      </Button>
    </TopHeaderLayout>
  )
})
