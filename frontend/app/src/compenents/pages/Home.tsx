import axios from "axios";
import { FC, memo, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';

import { AuthContext } from "../../App";
import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";

export const Home: FC = memo(() => {
  const { userId } = useContext(AuthContext);
  // axios.get<any>("http://localhost:3002/api/v1/users").then((res) => {
  //   console.log(res);
  //   const data = res.data.users.map((user: any) => ({
  //     name: user.name,
  //     email: user.email
  //   }));
  return (
    <HomeHeaderLayout>

      <Box
        sx={{
          width: 1200,
          height: 600,
          backgroundColor: 'white',
          border: '1',
          borderColor: 'grey.500',
          mx: 'auto',
          mt: 4,
          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        <Button
          variant="outlined"
          component={Link}
          to={`/home/list`}
        >
          List
      </Button>
      </Box>
    </HomeHeaderLayout>
  )
})
