import types from '../actions/types'

const INITIAL_STATE = {
  user: null,
  repos: [],
  error: null,
  isLoading: false,
}

const github = ( state = INITIAL_STATE, action ) => {
  const { type, payload } = action

  switch(type) {
    
    case types.ASYNC_FETCH_USER:
      return { ...state, isLoading: true }

    case types.SET_ERROR:
      return { ...state, error: payload, isLoading: false }
    
    case types.SET_USER:
      return { ...state, isLoading: false, user: payload }  

    case types.SET_REPOS:
      return { ...state, isLoading: false, repos: payload }

    case types.ASYNC_FETCH_REPOS:  
      return { ...state, isLoading: true }
      
    default:
      return state
  }
}

export default github