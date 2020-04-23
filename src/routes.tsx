import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home/Home').then((module) => ({ default: module.Home })))

export function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" component={(): JSX.Element => <Home offset={0} limit={10} />} />
    </Switch>
  )
}
