import { all } from 'redux-saga/effects'
import github from './github'

function *rootSaga() {
    return yield all([
        github()
    ])
}

export { 
    rootSaga 
}