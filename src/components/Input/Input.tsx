import React, { ChangeEvent } from 'react'
import { Styled } from './style'

type Props = {
  value?: string
  handleChange(e: ChangeEvent<HTMLInputElement>): void
  placeholder?: string
}
export function Input(props: Props): JSX.Element {
  const { placeholder, handleChange, value } = props

  return <Styled.Input value={value} onChange={handleChange} placeholder={placeholder} />
}
