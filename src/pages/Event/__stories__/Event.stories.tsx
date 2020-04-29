import React from 'react'
import { Event } from '../Event'
import { ApolloMockProvider } from '../../../graphql/ApolloMockProvider/ApolloMockProvider'

export default {
  title: 'Event Page',
  component: Event,
}

export const eventPage = (): JSX.Element => {
  return (
    <ApolloMockProvider>
      <Event />
    </ApolloMockProvider>
  )
}

eventPage.story = {
  name: 'default',
}
