import { FC, memo, ReactNode, useContext } from "react";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

import { AuthContext } from "../../../App";
import { PostContext } from "../../../providers/PostProvider";
import { createBookmark } from "../../../apis/bookmark";



type Props = {
  id: string;
}

export const BookmarkButton: FC<Props> = memo((props) => {
  const { id } = props
  const { userId } = useContext(AuthContext);
  return (
    <Tooltip title="Bookmark">
      <IconButton
        aria-label="share"
        onClick={() => createBookmark(userId, id)}
      >
        <BookmarkAddOutlinedIcon />
      </IconButton>
    </Tooltip>
  )
})
