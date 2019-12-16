import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './store/config'
import history from './utils/history'

import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
            
        </Router>
      </Provider>
    </>
  )
}

export default App
