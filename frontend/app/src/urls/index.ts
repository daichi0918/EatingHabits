const DEFAULT_API_LOCALHOST = 'http://localhost:3002/api/v1'

export const usersIndex = `${DEFAULT_API_LOCALHOST}/users`
export const listsIndex = (userId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/lists`
export const listCreate = (userId: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/lists`
export const listDestroy = (userId: string | undefined, id: string | undefined) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/lists/${id}`

