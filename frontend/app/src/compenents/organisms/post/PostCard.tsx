// import { Box, Button, Stack, Text } from "@chakra-ui/react";
import dayjs, { Dayjs } from 'dayjs';
import { FC, memo, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import Tooltip from '@mui/material/Tooltip';

import { destroyFood } from "../../../apis/food";
import { AuthContext } from "../../../App";
import { PostContext } from "../../../providers/PostProvider";
import { PostDetail } from "./PostDetail"

type Props = {
  id: string;
  user_id: string;
  text: string;
  image?: {
    url: string
  };
  created_at: string;
  title: string;
  username: string;
  userimage: string
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export const PostCard: FC<Props> = memo((props) => {
  const { id, user_id, text, image, title, created_at, username, userimage } = props;
  const { userId } = useContext(AuthContext);
  const { setPostId, setTrigger } = useContext(PostContext);

  const navigate = useNavigate();

  const onClickFoodEdit = () => {
    setPostId(id)
    navigate("/home/food/edit")
  }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      // component="span"
      // sx={{ display: 'inline-block', m: 0, transform: 'scale(0.8)' }}
      sx={{ display: 'inline-block', m: 0.5 }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
          </Avatar>
          }
          // action={
          //   // <IconButton aria-label="settings">
          //   //   <MoreVertIcon />
          //   // </IconButton>
          //   <Tooltip title="Bookmark">
          //     <IconButton aria-label="share">
          //       <BookmarkAddOutlinedIcon />
          //     </IconButton>
          //   </Tooltip>
          // }
          title={username}
          subheader={dayjs(created_at).format('YYYY/MM/DD HH:mm')}
        />
        <CardMedia
          component="img"
          height="194"
          image={image?.url}
          alt="No Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Reply">
            <IconButton aria-label="comment">
              <ChatBubbleOutlineIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Like">
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Bookmark">
            <IconButton aria-label="share">
              <BookmarkAddOutlinedIcon />
            </IconButton>
          </Tooltip>
          {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
          <PostDetail title={title} image={image} text={text} />
        </CardActions>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent> */}
        {/* <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
          </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}

        {/* </CardContent>
        </Collapse> */}
      </Card >
    </Box >

  )
})
