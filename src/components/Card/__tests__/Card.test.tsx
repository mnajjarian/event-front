import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { Card } from '../Card'
import db from '../../../db.json'
import { formatDate } from '../../../helpers'

const event = db.data[0]
const setup = (): RenderResult => render(<Card event={event} />)

describe('Testing Card component', () => {
  const { container } = setup()
  it('Should be defined', () => {
    expect(container).toBeDefined()
  })
  it('Should have the image source set correctly', () => {
    const { getByAltText } = setup()
    const img = getByAltText('event')
    const { url } = event.description.images[0]
    expect(img).toHaveAttribute('src', url)
  })
  it('Should render the event name correctly', () => {
    const { getByText } = setup()
    const eventName = event.name.fi
    expect(getByText(eventName)).toHaveTextContent(eventName)
  })
  it('Should render the event date correctly', () => {
    const { getByText } = setup()
    const eventDate = formatDate(event.event_dates.starting_day)
    if (eventDate) {
      expect(getByText(eventDate)).toContainHTML('time')
      expect(getByText(eventDate)).toHaveTextContent(eventDate)
    }
  })
})
