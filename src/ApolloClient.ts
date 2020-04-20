import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
});

export default Client;
