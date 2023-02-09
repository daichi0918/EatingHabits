import React, { FC, ReactNode, createContext, useState } from 'react';
import { FoodType } from '../types/api/food';

// ContextProviderType --------------
type Props = {
  children: ReactNode
}

export const FoodContext = createContext({} as {
  foodId: string | undefined
  setFoodId: React.Dispatch<React.SetStateAction<string | undefined>>
  foodEdit: FoodType | undefined
  setFoodEdit: React.Dispatch<React.SetStateAction<FoodType | undefined>>
  foods: Array<FoodType>
  setFoods: React.Dispatch<React.SetStateAction<Array<FoodType>>>
  trigger: boolean
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
})

export const FoodContextProvider: FC<Props> = ({ children }: Props) => {

  const [foodId, setFoodId] = useState<string>();

  const [foodEdit, setFoodEdit] = useState<FoodType | undefined>();

  const [foods, setFoods] = useState<Array<FoodType>>([]);

  const [trigger, setTrigger] = useState(false);

  return (
    <FoodContext.Provider value={{ foodId, setFoodId, foodEdit, setFoodEdit, foods, setFoods, trigger, setTrigger }}>
      {children}
    </FoodContext.Provider>
  )

}
