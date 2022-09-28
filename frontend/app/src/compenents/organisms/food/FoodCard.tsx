// import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { FC, memo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { destroyFood } from "../../../apis/food";
import { AuthContext } from "../../../App";
import { FoodContext } from "../../../providers/FoodProvider";

type Props = {
  name: string;
  quantity: any;
  expired_at: string;
  notified_at: string | undefined | null;
  image?: {
    url: string
  }
  memo: string | undefined | null;
}

export const FoodCard: FC<any> = memo((props) => {
  const { id, name, quantity, expired_at, notified_at, image, memo } = props;
  const { userId } = useContext(AuthContext);
  const { setFoodId, setTrigger } = useContext(FoodContext);

  const navigate = useNavigate();

  const onClickFoodEdit = () => {
    setFoodId(id)
    navigate("/home/food/edit")
  }

  return (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: 'auto', transform: 'scale(0.8)' }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardMedia
          component="img"
          height="140"
          image={image.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {quantity}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onClickFoodEdit}>EDIT</Button>
          <Button size="small" onClick={() => destroyFood(userId, id, setTrigger)}>DELETE</Button>
        </CardActions>
      </Card>
    </Box >

  )
})
