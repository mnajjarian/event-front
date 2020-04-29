import React from 'react'
import { Navbar } from '../Navbar'
import { ApolloMockProvider } from '../../../graphql/ApolloMockProvider/ApolloMockProvider'

export default {
  title: 'Navbar',
  component: Navbar,
}

export const navbar = (): JSX.Element => {
  return (
    <ApolloMockProvider>
      <Navbar />
    </ApolloMockProvider>
  )
}

navbar.story = {
  name: 'default',
}
