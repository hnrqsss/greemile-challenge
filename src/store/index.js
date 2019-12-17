import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './reducers'
import { rootSaga } from './sagas'
import createStore from './createStore'

const sagaMonitor = process.env.NODE_ENV === 'development' 
    ? console.tron.createSagaMonitor()
    : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const middlewares = [sagaMiddleware]

const store = createStore(rootReducer, middlewares)

sagaMiddleware.run(rootSaga)

export default store