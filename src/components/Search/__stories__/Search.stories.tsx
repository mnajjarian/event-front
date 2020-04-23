import React from 'react'
import { Search } from '../Search'

export default {
  title: 'Search Field',
  component: Search,
}

export const SearchField = (): JSX.Element => <Search />

SearchField.story = {
  name: 'Search Field',
}
