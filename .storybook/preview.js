import React from 'react'
import { addDecorator } from '@storybook/react'
import { GlobalStyles } from '../src/styles/global'

addDecorator((storyFn) => (
  <>
    <GlobalStyles /> {storyFn()}
  </>
))
