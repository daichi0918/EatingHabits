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
import { PostContext } from "../../../providers/PostProvider";

type Props = {
  id: string;
  user_id: string;
  text: string;
  image?: {
    url: string
  };
  title: string;
}

export const PostCard: FC<Props> = memo((props) => {
  const { id, user_id, text, image, title } = props;
  const { userId } = useContext(AuthContext);
  const { setPostId, setTrigger } = useContext(PostContext);

  const navigate = useNavigate();

  const onClickFoodEdit = () => {
    setPostId(id)
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
          image={image?.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
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
