import { FC, memo, useEffect, useState, useContext, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

//
import { Stack } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
//

import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";


//
import { PostCard } from "../organisms/post/PostCard";
import { AuthContext } from "../../App";
import { PostType } from "../../types/api/post";
import { useAllPosts } from "../../hooks/useAllPosts";
import Button from '@mui/material/Button';
import { PostContext } from "../../providers/PostProvider";
import { AddButton } from "../atoms/button/AddButton"


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'white',
  },
  marginTop: 50,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));



export const Post: FC = memo(() => {

  const { userId } = useContext(AuthContext);

  const { postId, setPostId, posts, setPosts, trigger, setTrigger } = useContext(PostContext);

  const { getPosts, loading } = useAllPosts();

  const navigate = useNavigate()

  const onClickPostNew = () => {
    navigate("/home/post/new")
  }

  useEffect(() => { getPosts(setPosts) }, [trigger])

  console.log("posts" + posts)



  // // const { foods, setFoods, trigger, setTrigger } = useContext(FoodContext);

  // // const [foods, setFoods] = useState<Array<FoodType>>([]);

  // // const [trigger, setTrigger] = useState(false);

  // const { getFoods, loading } = useAllFoods();

  // const navigate = useNavigate()

  // const onClickFoodNew = () => navigate("/home/food/new")

  // useEffect(() => getFoods(userId, setFoods), [trigger])


  return (
    <HomeHeaderLayout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Fragment>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Fragment>
      </Container>
      <Fragment>
        <div>投稿一覧</div>
        {loading ? (
          <Stack alignItems="center" justifyContent="center" style={{ marginTop: '300px' }}>
            <Box sx={{ alignItems: 'center' }}>
              <CircularProgress />
            </Box>
          </Stack>

        ) : (
            <>
              {posts.map((post: any) => (
                <PostCard key={post.id} id={post.id} user_id={post.user_id} text={post.text} image={post.image} title={post.title} created_at={post.created_at} username={post.userName} userimage={post.userImage} />
              ))}
            </>
          )}
      </Fragment>
      <AddButton onClick={onClickPostNew} />
    </HomeHeaderLayout>

  )
})
