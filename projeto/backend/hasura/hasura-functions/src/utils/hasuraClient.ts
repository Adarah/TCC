import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "node-fetch";

const hasuraClient = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:8080/v1/graphql",
    fetch,
    headers: {
      "x-hasura-admin-secret": "myadminsecretkey",
    },
  }),
  cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      }
    }
});

export default hasuraClient;
