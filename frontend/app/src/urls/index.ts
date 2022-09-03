const DEFAULT_API_LOCALHOST = 'http://localhost:3002/api/v1'

export const usersIndex = `${DEFAULT_API_LOCALHOST}/users`
export const listsIndex = (userId: string) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/lists`
export const listCreate = (userId: string) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/lists`
export const listDestroy = (userId: string, id: string) =>
  `${DEFAULT_API_LOCALHOST}/users/${userId}/lists/${id}`

