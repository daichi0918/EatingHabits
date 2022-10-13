const DEFAULT_API_LOCALHOST = 'http://localhost:3002/api/v1'

export const usersIndex = `${DEFAULT_API_LOCALHOST}/users`
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

export const favoriteCretate = (id: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/posts/${id}/favorites`


