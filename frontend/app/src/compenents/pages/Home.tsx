import axios from "axios";
import { FC, memo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { CardActionArea } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

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
  const navigate = useNavigate();

  const onClickList = () => navigate("list")
  return (
    <HomeHeaderLayout>

      <Box
        sx={{
          width: 1200,
          height: 600,
          backgroundColor: 'white',
          border: '1',
          borderColor: grey[500],
          mx: 'auto',
          mt: 4,
          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        <Card
          sx={{
            width: 280,
            height: 150,
            m: 2,
            backgroundColor: grey[100],
            '&:hover': {
              opacity: [0.9, 0.8, 0.7],
              cursor: 'pointer'
            },
          }}
          onClick={onClickList}
        >
          <CardContent>
            <Grid container>
              <Grid item xs={6} md={3}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <FormatListBulletedIcon />
                </Avatar>
              </Grid>
              <Grid item xs={6} md={9}>
                <Typography variant="h6" component="div" sx={{ m: 1.5 }}>
                  買い物リスト
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" align="center" sx={{ m: 1.5 }}>
              買いたいものをリストアップする
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </HomeHeaderLayout>
  )
})
