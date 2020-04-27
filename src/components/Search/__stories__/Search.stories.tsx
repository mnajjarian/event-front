import React from 'react'
import { Search } from '../Search'

export default {
  title: 'Search Field',
  component: Search,
}

export const searchField = (): JSX.Element => <Search />

searchField.story = {
  name: 'default',
}
