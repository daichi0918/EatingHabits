import dayjs, { Dayjs } from 'dayjs';
import { FC, memo, useContext, useState, useEffect } from "react";
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
import Divider from '@mui/material/Divider';

import { destroyFood } from "../../../apis/food";
import { AuthContext } from "../../../App";
import { PostContext } from "../../../providers/PostProvider";
import { PostDetail } from "./PostDetail"
import { FavoriteButton } from '../../atoms/button/FavoriteButton';
import { BookmarkButton } from '../../atoms/button/BookmarkButton';
import { useAllFavorites } from "../../../hooks/useAllFavorites";
import nouser from "../../../images/nouser.png";

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
  userimage?: {
    url: string
  };
  isfavorited: boolean;
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

const textTypography = styled(Typography)({
  width: '250px',
  color: 'rgba(0,0,0,0.6)',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});



export const PostCard: FC<Props> = memo((props) => {
  const { id, user_id, text, image, title, created_at, username, userimage, isfavorited } = props;

  const { userId } = useContext(AuthContext);
  const { setPostId, setTrigger } = useContext(PostContext);

  const [favoriteTrigger, setFavoriteTrigger] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const { getFavorites, favoriteLoading } = useAllFavorites();

  useEffect(() => { getFavorites(id, setFavorites) }, [favoriteTrigger])

  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{ display: 'inline-block', m: 0.5 }}
    >
      <Card sx={{
        width: 270,
        height: 400
      }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={userimage?.url != null ? userimage?.url : nouser}
            />
          }
          action={
            <BookmarkButton id={id} />
          }
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
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography
            sx={{
              width: '250px',
              color: 'rgba(0,0,0,0.6)',
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
            {text}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions disableSpacing>
          <FavoriteButton post_id={id} user_id={user_id} favorites={favorites} setFavoriteTrigger={setFavoriteTrigger} isfavorited={isfavorited} />
          {favorites.length}
        </CardActions>
      </Card >
    </Box >

  )
})
