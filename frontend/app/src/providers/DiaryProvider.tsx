import React, { FC, ReactNode, createContext, useState } from 'react';
import { DiaryIndexType } from '../types/api/diary';

// ContextProviderType --------------
type Props = {
  children: ReactNode
}

export const DiaryContext = createContext({} as {
  diaryId: string | undefined
  setDiaryId: React.Dispatch<React.SetStateAction<string | undefined>>
  indexDiaries: Array<DiaryIndexType>
  setIndexDiaries: React.Dispatch<React.SetStateAction<Array<DiaryIndexType>>>
  trigger: boolean
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
})

export const DiaryContextProvider: FC<Props> = ({ children }: Props) => {

  const [diaryId, setDiaryId] = useState<string>();

  const [indexDiaries, setIndexDiaries] = useState<Array<DiaryIndexType>>([]);

  const [trigger, setTrigger] = useState(false);

  return (
    <DiaryContext.Provider value={{ diaryId, setDiaryId, indexDiaries, setIndexDiaries, trigger, setTrigger }}>
      {children}
    </DiaryContext.Provider>
  )

}
