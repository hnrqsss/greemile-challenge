import { types } from "./index"

export const asyncFetchUser = (user) => ({
  type: types.ASYNC_FETCH_USER,
  payload: user,
})

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
})

export const fetchUserError = (error) => ({
  type: types.SET_ERROR,
  payload: error,
})

export const asyncFetchRepos = user => ({
  type: types.ASYNC_FETCH_REPOS,
  payload: user,
})

export const setRepos = repos => ({
  type: types.SET_REPOS,
  payload: repos,
})
