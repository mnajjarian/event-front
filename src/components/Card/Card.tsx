import React from 'react'
import { Styled } from './style'
import { EventInterface } from '../../interfaces'
import { formatDate } from '../../helpers'

type Props = {
  event: EventInterface
}

export function Card(props: Props): JSX.Element {
  const { id, name, description, event_dates } = props.event

  return (
    <Styled.CardWrapper>
      <Styled.Card>
        <Styled.CardContent>
          <Styled.CardMedia>
            <Styled.Link href={`/e/${id}`} aria-label="link">
              <Styled.CardImage>
                <Styled.ImageHolder />
                {description.images && (
                  <Styled.Image src={description.images[0] ? description.images[0].url : ''} alt="event" />
                )}
              </Styled.CardImage>
            </Styled.Link>
          </Styled.CardMedia>
          <Styled.CardBody>
            <Styled.CardBodyContent>
              <Styled.CardTime>{formatDate(event_dates.starting_day)}</Styled.CardTime>
              <Styled.Link href={`/e/${id}`}>
                <Styled.CardTitle>{name.fi}</Styled.CardTitle>
              </Styled.Link>
            </Styled.CardBodyContent>
          </Styled.CardBody>
        </Styled.CardContent>
      </Styled.Card>
    </Styled.CardWrapper>
  )
}
