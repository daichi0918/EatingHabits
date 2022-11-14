// export const DEFAULT_API_LOCALHOST = 'http://localhost:3002/api/v1'
export const DEFAULT_API_LOCALHOST = 'http://160.251.98.255:3002/api/v1'

export const usersIndex = `${DEFAULT_API_LOCALHOST}/users`
export const userEdit = (userId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/edit`
export const userUpdate = (userId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}`

export const listsIndex = (userId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/lists`
export const listCreate = (userId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/lists`
export const listDestroy = (userId: string | undefined, id: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/lists/${id}`

export const foodsIndex = (userId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/foods`
export const foodCreate = (userId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/foods`
export const foodEdit = (userId: string | undefined, id: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/foods/${id}/edit`
export const foodUpdate = (userId: string | undefined, id: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/foods/${id}`
export const foodDestroy = (userId: string | undefined, id: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/foods/${id}`


export const postsIndex = `${DEFAULT_API_LOCALHOST}/posts`
export const postCreate = `${DEFAULT_API_LOCALHOST}/posts`
export const postEdit = (id: string) =>
  `${DEFAULT_API_LOCALHOST}/posts/${id}`
export const postUpdate = (id: string) =>
  `${DEFAULT_API_LOCALHOST}/posts/${id}`
export const postDestroy = (id: string) =>
  `${DEFAULT_API_LOCALHOST}/posts/${id}`


export const favoritesIndex = (postId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/posts/${postId}/favorites`
export const favoriteCretate = (postId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/posts/${postId}/favorites`
export const favoriteDestroy = (favoriteId: string | undefined, postId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/posts/${postId}/favorites/${favoriteId}`



export const bookmarkCretate = (id: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/posts/${id}/bookmarks`



export const diariesIndex = (userId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/diaries`
export const diaryCreate = (userId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/diaries`
export const diaryEdit = (userId: string | undefined, id: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/diaries/${id}/edit`
export const diaryUpdate = (userId: string | undefined, id: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/diaries/${id}`
export const diaryDestroy = (userId: string | undefined, id: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/diaries/${id}`


