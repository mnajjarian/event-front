import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import { GraphQLName, GraphQLLocation, GraphQLDescription, GraphQLTag, GraphQLEventDate } from './shared'

export const GraphQLEvent = new GraphQLObjectType({
  name: 'Event',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLName,
    },
    info_url: {
      type: GraphQLString,
    },
    modified_at: {
      type: GraphQLString,
    },
    event_dates: {
      type: GraphQLEventDate,
    },
    location: {
      type: GraphQLLocation,
    },
    description: {
      type: GraphQLDescription,
    },
    tags: {
      type: GraphQLList(GraphQLTag),
    },
  }),
})
