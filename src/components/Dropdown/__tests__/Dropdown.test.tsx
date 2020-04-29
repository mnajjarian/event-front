import React from 'react'
import { render } from '@testing-library/react'
import { Dropdown } from '../Dropdown'
import { ApolloMockProvider } from '../../../graphql/ApolloMockProvider/ApolloMockProvider'

describe('Testing Dropdown component', () => {
  const { getByText } = render(
    <ApolloMockProvider>
      <Dropdown str="Helsinki Pride 2020" />
    </ApolloMockProvider>,
  )

  test('Should render dropdown tabs correctly', () => {
    const element = getByText('Helsinki Pride 2020')
    expect(element).toBeInTheDocument()
  })
})
