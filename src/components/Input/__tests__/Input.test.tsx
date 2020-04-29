import React from 'react'
import { Input } from '../Input'
import { render, fireEvent } from '@testing-library/react'

describe('Testing Input component', () => {
  const handleChange = jest.fn()
  const { getByTestId } = render(<Input handleChange={handleChange} />)
  const input = getByTestId('test-input')

  it('Input field should be defined', () => {
    expect(input).toBeDefined()
  })
  it('should change the input value with event', () => {
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input).toHaveValue('test')
  })
})
