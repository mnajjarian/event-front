import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Event } from './pages/Event/Event'

const Home = lazy(() => import('./pages/Home/Home').then((module) => ({ default: module.Home })))

export function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/e/:id" component={Event} />
      <Route path="/" component={(): JSX.Element => <Home />} />
    </Switch>
  )
}
