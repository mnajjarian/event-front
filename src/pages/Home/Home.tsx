import React from 'react'
import { Card } from '../../components/Card/Card'
import { useQuery } from '@apollo/client'
import { GET_EVENTS } from '../../graphql/queries'
import { Styled } from './style'
import { EventInterface } from '../../interfaces'
import { Search } from '../../components/Search/Search'

type Props = {
  offset: number
  limit: number
}
export function Home(props: Props): JSX.Element {
  const { data, loading } = useQuery(GET_EVENTS)

  const { offset, limit } = props

  if (loading) {
    return <div>...Loading</div>
  }
  if (!data) {
    return <div>Error.</div>
  }

  const enEvents = data.getEvents.filter((ev: EventInterface) => ev.name?.en).slice(offset, limit)
  return (
    <>
      <Search />
      <Styled.Event>
        {enEvents.map((event: EventInterface) => (
          <Card key={event.id} event={event} />
        ))}
      </Styled.Event>
    </>
  )
}
