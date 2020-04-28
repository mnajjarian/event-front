import React, { ReactNode } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { SchemaLink } from 'apollo-link-schema'
import { printSchema, GraphQLSchema, GraphQLObjectType } from 'graphql'
import { GraphQLEvent } from '../types/event'
import { eventQueries } from '../queries/index'

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
    Query: (): boolean => true,
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
