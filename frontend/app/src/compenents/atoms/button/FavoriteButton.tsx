import { FC, memo, ReactNode, useContext } from "react";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { AuthContext } from "../../../App";
import { PostContext } from "../../../providers/PostProvider";
import { createFavorite } from "../../../apis/favorite";



type Props = {
  id: string;
}

export const FavoriteButton: FC<Props> = memo((props) => {
  const { id } = props
  const { userId } = useContext(AuthContext);
  const { setPostId, setTrigger } = useContext(PostContext);
  // const { onClick } = props;
  return (
    <>
      <Tooltip title="Like">
        <IconButton
          aria-label="add to favorites"
          onClick={() => createFavorite(userId, id)}
          sx={{
            paddingTop: 0,
            marginLeft: 25
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </Tooltip>
      {/* <Tooltip title="Unlike">
        <IconButton aria-label="delete to favorites" style={{ color: "red" }}>
          <FavoriteIcon onClick={() => createFavorite(userId, id)} />
        </IconButton>
      </Tooltip> */}
    </>
  )
})
