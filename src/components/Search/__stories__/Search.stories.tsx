import React from 'react'
import { Search } from '../Search'
import { ApolloMockProvider } from '../../../graphql/ApolloMockProvider/ApolloMockProvider'

export default {
  title: 'Search Field',
  component: Search,
}

export const searchField = (): JSX.Element => {
  return (
    <ApolloMockProvider>
      <Search />
    </ApolloMockProvider>
  )
}

searchField.story = {
  name: 'default',
}
