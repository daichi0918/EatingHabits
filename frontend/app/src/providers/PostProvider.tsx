import React, { FC, ReactNode, createContext, useState } from 'react';
import { PostType } from '../types/api/post';

// ContextProviderType --------------
type Props = {
  children: ReactNode
}

export const PostContext = createContext({} as {
  postId: string | undefined
  setPostId: React.Dispatch<React.SetStateAction<string | undefined>>
  posts: Array<PostType>
  setPosts: React.Dispatch<React.SetStateAction<Array<PostType>>>
  trigger: boolean
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
})

export const PostContextProvider: FC<Props> = ({ children }: Props) => {

  const [postId, setPostId] = useState<string>();

  // const [foodEdit, setFoodEdit] = useState<FoodType | undefined>();

  const [posts, setPosts] = useState<Array<PostType>>([]);

  const [trigger, setTrigger] = useState(false);

  return (
    <PostContext.Provider value={{ postId, setPostId, posts, setPosts, trigger, setTrigger }}>
      {children}
    </PostContext.Provider>
  )

}
