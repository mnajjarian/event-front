import React from "react";
import { ApolloProvider } from "@apollo/client";
import Client from "./ApolloClient";

function App() {
  return (
    <ApolloProvider client={Client}>
      <div>Hello World</div>
    </ApolloProvider>
  );
}

export default App;
