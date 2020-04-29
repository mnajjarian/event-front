import React from 'react'
import { GridStyle } from '../../styles/grid'
import { Styled } from './style'
import { Search } from '../Search/Search'

export function Navbar(): JSX.Element {
  return (
    <GridStyle.Row>
      <Styled.Nav>
        <Styled.NavBrand>Event</Styled.NavBrand>
        <Styled.NavSearch>
          <GridStyle.Column xs="10" sm="6" md="6">
            <Search />
          </GridStyle.Column>
        </Styled.NavSearch>
        <Styled.LangSwitch>EN</Styled.LangSwitch>
      </Styled.Nav>
    </GridStyle.Row>
  )
}
