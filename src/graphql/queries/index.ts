import { loader } from 'graphql.macro'
import { GraphQLEvent } from '../types/event'
import { GraphQLList, GraphQLString } from 'graphql'

const GET_EVENTS = loader('./getEvents.graphql')
const GET_EVENT_BY_ID = loader('./getEventById.graphql')

const eventQueries = {
  getEvents: {
    type: GraphQLList(GraphQLEvent),
  },
  getEventById: {
    type: GraphQLEvent,
    args: {
      id: {
        type: GraphQLString,
      },
    },
  },
}
export { GET_EVENTS, GET_EVENT_BY_ID, eventQueries }
