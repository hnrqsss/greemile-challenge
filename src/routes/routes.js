import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import { Home } from '../screens'

// import { Container } from './styles'

export default function Routes() {
  return (
    <>
      <Switch>
        <Route 
          exact 
          path='/'
          component={() => <Home />}
        />
      </Switch>
    </>
  )
}
