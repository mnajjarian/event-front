import React, { ReactNode } from 'react'
import { Category } from '../Category'
import { ApolloMockProvider } from '../../../graphql/ApolloMockProvider/ApolloMockProvider'

export default {
  title: 'Category',
  component: Category,
}

export const music = (): JSX.Element => {
  return (
    <ApolloMockProvider>
      <Category category="music" />
    </ApolloMockProvider>
  )
}
export const exhibition = (): JSX.Element => {
  return (
    <ApolloMockProvider>
      <Category category="exhibitions" />
    </ApolloMockProvider>
  )
}

music.story = {
  name: 'music',
}

exhibition.story = {
  name: 'exhibitions',
}
