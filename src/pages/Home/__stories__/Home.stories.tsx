import React from 'react'
import { Home } from '../Home'
import { ApolloProvider } from '@apollo/client'
import Client from '../../../ApolloClient'
import { ApolloMockProvider } from '../../../graphql/ApolloMockProvider/ApolloMockProvider'

export default {
  title: 'Home page',
  component: Home,
}

export const homePage = (): JSX.Element => {
  return (
    <ApolloMockProvider>
      <Home offset={0} limit={10} />
    </ApolloMockProvider>
  )
}

homePage.story = {
  name: 'default',
}
