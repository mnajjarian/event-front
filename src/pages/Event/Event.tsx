import React from 'react'
import { Styled } from './style'
import { useHistory } from 'react-router-dom'
import renderHTML from 'react-render-html'
import db from '../../db.json'
import { formatDate } from '../../helpers'
import { GridStyle } from '../../styles/grid'

export function Event(): JSX.Element {
  const {
    location: { pathname },
  } = useHistory()

  const { id, name, description, location, tags, event_dates } = db.data[0]

  return (
    <GridStyle.Container>
      <Styled.Card>
        <GridStyle.Row>
          <GridStyle.Column xs="12" sm="6" md="6">
            <Styled.Image src={description.images[0].url} alt="event" />
          </GridStyle.Column>
          <GridStyle.Column xs="12" sm="6" md="6">
            <Styled.Info>
              <Styled.Title>{name.en}</Styled.Title>
              <Styled.Summary>
                {description.intro}
                <Styled.More href="#more">+++</Styled.More>
              </Styled.Summary>
              <Styled.Date>
                <Styled.DateGroup>
                  <Styled.Label>start date:</Styled.Label>
                  <Styled.Time>{formatDate(event_dates.starting_day)}</Styled.Time>
                </Styled.DateGroup>
                <Styled.DateGroup>
                  <Styled.Label>end date:</Styled.Label>
                  <Styled.Time>{formatDate(event_dates.ending_day)}</Styled.Time>
                </Styled.DateGroup>
              </Styled.Date>
              <Styled.Address>
                Address:{location.address.street_address}, {location.address.postal_code}, {location.address.locality}
              </Styled.Address>
            </Styled.Info>
          </GridStyle.Column>
        </GridStyle.Row>
      </Styled.Card>
      <Styled.Description id="more">
        <GridStyle.Row>{renderHTML(description.body)}</GridStyle.Row>
        <GridStyle.Row>
          <Styled.Title>tags</Styled.Title>
          <Styled.TagList>
            {tags.map((tag) => (
              <Styled.Tag key={tag.id}>
                <Styled.TagLink href="/#">{tag.name}</Styled.TagLink>
              </Styled.Tag>
            ))}
          </Styled.TagList>
        </GridStyle.Row>
      </Styled.Description>
    </GridStyle.Container>
  )
}
