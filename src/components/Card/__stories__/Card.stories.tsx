import React from 'react'
import { Card } from '../Card'
import { EventInterface } from '../../../interfaces'
import db from '../../../db.json'
export default {
  title: 'Card',
  component: Card,
}

const event: EventInterface = db.data[0]
export const card = (): JSX.Element => <Card event={event} />

card.story = {
  name: 'default',
}
