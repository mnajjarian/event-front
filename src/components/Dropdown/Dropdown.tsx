import React from 'react'
import { GridStyle } from '../../styles/grid'
import { Styled } from './style'
import { useQuery } from '@apollo/client'
import { GET_EVENTS } from '../../graphql/queries'
import { EventInterface } from '../../interfaces'

type Props = {
  str: string
}
export function Dropdown(props: Props): JSX.Element {
  const { data, loading } = useQuery(GET_EVENTS)
  if (!data || loading) {
    return <div></div>
  }
  const { str } = props
  const events: EventInterface[] = data.getEvents.filter((event: EventInterface) =>
    event.name.fi.toLowerCase().includes(str.toLowerCase()),
  )

  return (
    <GridStyle.Row>
      {str.length > 2 && events.length > 0 && (
        <Styled.Dropdown>
          {events.map((event: EventInterface) => (
            <Styled.Tab key={event.id} href={`/e/${event.id}`}>
              {event.name.fi}
            </Styled.Tab>
          ))}
        </Styled.Dropdown>
      )}
    </GridStyle.Row>
  )
}
