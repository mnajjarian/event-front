import React from 'react'
import { Home } from '../Home'
import { ApolloProvider } from '@apollo/client'
import Client from '../../../ApolloClient'

export default {
  title: 'Home page',
  component: Home,
}

export const homePage = (): JSX.Element => {
  return (
    <ApolloProvider client={Client}>
      <Home offset={0} limit={10} />
    </ApolloProvider>
  )
}

homePage.story = {
  name: 'default',
}
