import React from 'react'
import { GridStyle } from '../../styles/grid'
import { Category } from '../../components/Category/Category'
import { Navbar } from '../../components/Navbar/Navbar'
import { Styled } from './style'
export function Home(): JSX.Element {
  return (
    <Styled.Home>
      <Navbar />
      <GridStyle.Row>
        <Category category="music" />
        <Category category="exhibitions" />
        <Category category="art" />
        <Category category="theatre" />
        <Category category="games" />
        <Category category="Culture and leisure" />
      </GridStyle.Row>
    </Styled.Home>
  )
}
