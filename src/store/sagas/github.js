import { all, call, put, takeLatest } from 'redux-saga/effects'
import { types } from '../actions'
import { api } from '../../utils'

function *fetchUser({ payload }) {
  try {

    const { user } = payload

    const { data } = yield call(api.get, `/users/${user}`)

    yield put({ type: types.SET_USER,  payload: data })

    yield put({ type: types.ASYNC_FETCH_REPOS, payload: { user }})

  } catch(error) {
    yield call(setError, error)
  }
}

function *fetchRepos({ payload }) {
  try {

    const { user } = payload

    const { data } = yield call(api.get, `/users/${user}/repos`)

    yield put({ type: types.SET_REPOS, payload: data })

  } catch(error) {
    yield call(setError, error)
  }
}

function *setError(error) {
  if(error.response && error.response.message) {
    yield put({ type: types.SET_ERROR, payload: error.response.message })
  } else {
    yield put({ type: types.SET_ERROR, payload: 'Unknow error' })
  }
}

export default function *github() {
  yield all([
    takeLatest(types.ASYNC_FETCH_USER, fetchUser),
    takeLatest(types.ASYNC_FETCH_REPOS, fetchRepos)
  ])
}