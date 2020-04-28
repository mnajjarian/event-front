import { GraphQLString, GraphQLObjectType, GraphQLList } from 'graphql'

export const GraphQLName = new GraphQLObjectType({
  name: 'Name',
  fields: () => ({
    fi: {
      type: GraphQLString,
    },
    en: {
      type: GraphQLString,
    },
    sv: {
      type: GraphQLString,
    },
  }),
})
export const GraphQLAddress = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    street_address: {
      type: GraphQLString,
    },
    postal_code: {
      type: GraphQLString,
    },
    locality: {
      type: GraphQLString,
    },
  }),
})
export const GraphQLLocation = new GraphQLObjectType({
  name: 'Location',
  fields: () => ({
    lat: {
      type: GraphQLString,
    },
    lon: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLAddress,
    },
  }),
})
export const GraphQLImage = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    url: {
      type: GraphQLString,
    },
  }),
})
export const GraphQLDescription = new GraphQLObjectType({
  name: 'Description',
  fields: () => ({
    body: {
      type: GraphQLString,
    },
    images: {
      type: GraphQLList(GraphQLImage),
    },
  }),
})

export const GraphQLTag = new GraphQLObjectType({
  name: 'Tag',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  }),
})
const GraphQLMoreDes = new GraphQLObjectType({
  name: 'MoreDes',
  fields: () => ({
    lang_code: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
  }),
})

export const GraphQLEventDate = new GraphQLObjectType({
  name: 'EventDate',
  fields: () => ({
    starting_day: {
      type: GraphQLString,
    },
    ending_day: {
      type: GraphQLString,
    },
    additional_description: {
      type: GraphQLMoreDes,
    },
  }),
})
