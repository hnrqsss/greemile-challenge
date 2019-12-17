import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './store/config'
import { history } from './utils'

import store from './store'
import Routes from './routes/routes'

function App() {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
            <Routes />
        </Router>
      </Provider>
    </>
  )
}

export default App
