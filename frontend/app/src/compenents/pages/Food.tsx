import { FC, memo, useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";
import { FoodCard } from "../organisms/food/FoodCard";
import { AuthContext } from "../../App";
import { FoodType } from "../../types/api/food";
import { useAllFoods } from "../../hooks/useAllFoods";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { FoodContext } from "../../providers/FoodProvider";


const StyledFab = styled(Fab)({
  position: 'fixed',
  zIndex: 1,
  top: 630,
  left: 1100,
  right: 0,
  margin: '0 auto',
});


export const Food: FC = memo(() => {

  const { userId } = useContext(AuthContext);

  const { foods, setFoods, trigger, setTrigger } = useContext(FoodContext);

  // const [foods, setFoods] = useState<Array<FoodType>>([]);

  // const [trigger, setTrigger] = useState(false);

  const { getFoods, loading } = useAllFoods();

  const navigate = useNavigate()

  const onClickFoodNew = () => navigate("/home/food/new")

  useEffect(() => getFoods(userId, setFoods), [trigger])

  return (
    <HomeHeaderLayout>
      <div>消費期限管理ページ</div>
      {loading ? (
        <Stack alignItems="center" justifyContent="center" style={{ marginTop: '300px' }}>
          <Box sx={{ alignItems: 'center' }}>
            <CircularProgress />
          </Box>
        </Stack>

      ) : (
          <>
            {foods.map((food: any) => (
              <FoodCard id={food.id} name={food.name} quantity={food.quantity} expired_at={food.expired_at} notified_at={food.notified_at} image={food.image} memo={food.memo} />
            ))}
          </>

        )}
      <StyledFab color="primary" aria-label="add">
        <AddIcon onClick={onClickFoodNew} />
      </StyledFab>
    </HomeHeaderLayout>

  )
})
