import { FC, memo, ReactNode, useContext, useState, useEffect } from "react";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { AuthContext } from "../../../App";
import { PostContext } from "../../../providers/PostProvider";
import { createFavorite, destroyFavorite } from "../../../apis/favorite";



type Props = {
  post_id: string;
  user_id: string;
  favorites: Array<any>;
  setFavoriteTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  isfavorited: boolean;
}

export const FavoriteButton: FC<Props> = memo((props: Props) => {
  const { post_id, user_id, favorites, setFavoriteTrigger, isfavorited } = props
  const { userId } = useContext(AuthContext);
  const { setPostId, setTrigger } = useContext(PostContext);
  const [favorite, setFavorite] = useState<boolean>(isfavorited);

  const reversefavorite = () => {
    console.log("abc:favorite")
    setFavorite(!favorite)
  }

  const getFavoriteId = () => {
    let favoriteId = ''
    favorites.forEach(favorite => {
      if (favorite.user_id == user_id && favorite.post_id == post_id) {
        favoriteId = favorite.id
        return favoriteId
      }
    })
    return favoriteId;
  }

  const fff = () => {
    console.log("Fsssssssger")
  }

  // useEffect(() => {

  //   return 
  // }, [])

  return (
    <>
      {favorite ? (
        <Tooltip title="Unlike">
          <IconButton
            aria-label="delete to favorites"
            style={{ color: "red" }}
            // onClick={() => {
            //   destroyFavorite(getFavoriteId(), post_id, setFavoriteTrigger)
            // }
            // }
            onClick={reversefavorite}
            sx={{
              paddingTop: 0,
              marginLeft: 25
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      ) : (
          < Tooltip title="Like">
            <IconButton
              aria-label="add to favorites"
              // onClick={() => {
              //   createFavorite(userId, post_id, setFavoriteTrigger)
              // }
              // }
              onClick={reversefavorite}
              sx={{
                paddingTop: 0,
                marginLeft: 25
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip >
        )
      }
    </>
  )
})
