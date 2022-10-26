import React, { FC, ReactNode, createContext, useState } from 'react';
import { DiaryIndexType } from '../types/api/diary';

// ContextProviderType --------------
type Props = {
  children: ReactNode
}

export const DiaryContext = createContext({} as {
  // loading: boolean
  // setLoading: React.Dispatch<React.SetStateAction<boolean>>
  // isSignedIn: boolean
  // setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  // currentUser: FoodType | undefined
  // setCurrentUser: React.Dispatch<React.SetStateAction<FoodType | undefined>>
  // userId: string | undefined
  // setUserId: React.Dispatch<React.SetStateAction<string | undefined>>
  diaryId: string | undefined
  setDiaryId: React.Dispatch<React.SetStateAction<string | undefined>>
  // diaryEdit: FoodType | undefined
  // setDiaryEdit: React.Dispatch<React.SetStateAction<FoodType | undefined>>
  indexDiaries: Array<DiaryIndexType>
  setIndexDiaries: React.Dispatch<React.SetStateAction<Array<DiaryIndexType>>>
  trigger: boolean
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
})

export const DiaryContextProvider: FC<Props> = ({ children }: Props) => {

  const [diaryId, setDiaryId] = useState<string>();

  // const [diaryEdit, setDiaryEdit] = useState<DiaryIndexType | undefined>();

  const [indexDiaries, setIndexDiaries] = useState<Array<DiaryIndexType>>([]);

  const [trigger, setTrigger] = useState(false);

  return (
    <DiaryContext.Provider value={{ diaryId, setDiaryId, indexDiaries, setIndexDiaries, trigger, setTrigger }}>
      {children}
    </DiaryContext.Provider>
  )

}
