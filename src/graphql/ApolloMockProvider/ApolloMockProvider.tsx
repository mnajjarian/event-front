import React, { ReactNode } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { SchemaLink } from 'apollo-link-schema'
import { printSchema, GraphQLSchema, GraphQLObjectType } from 'graphql'
import { GraphQLEvent } from '../types/event'
import { eventQueries } from '../queries/index'
import db from '../../db.json'
import { EventInterface } from '../../interfaces'
export function ApolloMockProvider({ children }: { children: ReactNode }): JSX.Element {
  const typeDefs = printSchema(
    new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',
        fields: eventQueries,
      }),
      types: [GraphQLEvent],
    }),
  )
  const schema = makeExecutableSchema({ typeDefs })
  const mocks = {
    Query: () => {
      return {
        getEvents: (): EventInterface[] => db.data,
        getEventBiId: (id: string): EventInterface => {
          return db.data.filter((event: EventInterface) => event.id === id)[0]
        },
      }
    },
    Mutation: (): boolean => true,
  }

  addMockFunctionsToSchema({
    schema,
    mocks,
  })
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: (new SchemaLink({ schema }) as unknown) as ApolloLink,
  })
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
