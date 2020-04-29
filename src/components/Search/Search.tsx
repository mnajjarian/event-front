import React, { useState, ChangeEvent } from 'react'
import { Styled } from './style'
import { Input } from '../Input/Input'
import { GridStyle } from '../../styles/grid'
import { Dropdown } from '../Dropdown/Dropdown'
import { useQuery } from '@apollo/client'

export function SVGSearch(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" style={{ height: '24px', width: '24px' }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"
      ></path>
    </svg>
  )
}

export function Search(): JSX.Element {
  const [state, setState] = useState('')
  const [hasFocus, setHasFocus] = useState(false)
  const handleFocus = (): void => setHasFocus(!hasFocus)
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setState(e.target.value)

  return (
    <Styled.Search>
      <Styled.SearchField outline={hasFocus ? '1px solid blue' : 'none'} onFocus={handleFocus} onBlur={handleFocus}>
        <SVGSearch />
        <Input placeholder="Search events" value={state} handleChange={handleChange} />
      </Styled.SearchField>
      <Dropdown str={state} />
    </Styled.Search>
  )
}
