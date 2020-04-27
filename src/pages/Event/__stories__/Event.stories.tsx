import React from 'react'
import { Event } from '../Event'

export default {
  title: 'Event Page',
  component: Event,
}

export const eventPage = (): JSX.Element => <Event />

eventPage.story = {
  name: 'default',
}
