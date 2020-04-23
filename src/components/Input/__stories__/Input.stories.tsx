import React from 'react'
import { Input } from '../Input'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Input',
  component: Input,
}

export const InputField = (): JSX.Element => <Input placeholder="Type here" handleChange={action('onChange')} />

InputField.story = {
  name: 'Input Field',
}
