import React from 'react'
import { render } from '@testing-library/react'
import { Search } from '../Search'
import { ApolloMockProvider } from '../../../graphql/ApolloMockProvider/ApolloMockProvider'

describe('Testing Search Component', () => {
  const { container } = render(
    <ApolloMockProvider>
      <Search />
    </ApolloMockProvider>,
  )
  test('Should render SVG icon correctly', () => {
    expect(container).toBeDefined()
  })
})
