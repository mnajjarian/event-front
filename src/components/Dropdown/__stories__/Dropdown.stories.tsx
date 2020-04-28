import React from 'react'
import { Dropdown } from '../Dropdown'
import { ApolloMockProvider } from '../../../graphql/ApolloMockProvider/ApolloMockProvider'

export default {
  title: 'Dropdown',
  component: Dropdown,
}

export const dropdownWithResult = (): JSX.Element => {
  return (
    <ApolloMockProvider>
      <Dropdown str="hel" />
    </ApolloMockProvider>
  )
}

export const dropdownWithoutResult = (): JSX.Element => {
  return (
    <ApolloMockProvider>
      <Dropdown str="" />
    </ApolloMockProvider>
  )
}

dropdownWithResult.story = {
  name: 'dropdown with result',
}

dropdownWithoutResult.story = {
  name: 'dropdown without result',
}
