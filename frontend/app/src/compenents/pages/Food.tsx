import { FC, memo, useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';


import { HomeHeaderLayout } from "../templates/HomeHeaderLayout";
import { FoodCard } from "../organisms/food/FoodCard";
import { AuthContext } from "../../App";
import { FoodType } from "../../types/api/food";
import { useAllFoods } from "../../hooks/useAllFoods";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { FoodContext, FoodContextProvider } from "../../providers/FoodProvider";




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
              <Box>
                <FoodCard name={food.name} quantity={food.quantity} expired_at={food.expired_at} notified_at={food.notified_at} image={food.image} memo={food.memo} />
              </Box>
            ))}
          </>

        )}
      <Button onClick={onClickFoodNew}>New</Button>
    </HomeHeaderLayout>

  )
})
