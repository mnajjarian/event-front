import React from 'react'
import { addDecorator } from '@storybook/react'
import { GlobalStyles } from '../src/styles/global'
import { MemoryRouter } from 'react-router-dom'

addDecorator((storyFn) => (
  <MemoryRouter initialEntries={['/']}>
    <GlobalStyles /> {storyFn()}
  </MemoryRouter>
))
