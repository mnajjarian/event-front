import React from 'react'
import { GridStyle } from '../../styles/grid'
import { useQuery } from '@apollo/client'
import { GET_EVENTS } from '../../graphql/queries'
import { EventInterface } from '../../interfaces'
import { useCategory } from '../../hooks/useCategory'
import { Styled } from './style'

type DataQuery = {
  getEvents: EventInterface[]
}

type Props = {
  category: string
}
export function Category(props: Props): JSX.Element {
  const { data, loading } = useQuery<DataQuery, null>(GET_EVENTS)

  const exCategory = useCategory({ data: { data: data?.getEvents, loading }, category: props.category, offsett: 4 })

  return (
    <Styled.Category>
      <Styled.Title>{props.category}</Styled.Title>

      <GridStyle.Row>{exCategory}</GridStyle.Row>
    </Styled.Category>
  )
}
