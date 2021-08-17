import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { setContext } from '@apollo/client/link/context';
import fetch from "node-fetch";
import env from '../config';

const httpLink = new HttpLink({
  uri: `${env.HASURA_URL}/v1/graphql`,
  fetch,
  headers: {
    'x-hasura-admin-secret': env.HASURA_ADMIN_SECRET,
    'x-hasura-use-backend-only-permissions': true,
  },
});

const authLink = setContext(async (operation, prevContext) => {
  console.log()
  const t = {
    ...prevContext.headers,
    ...operation.context
  };
  console.log('in authLink', t);
  return {
    headers: {
      ...prevContext.headers,
      ...operation.context
    },
  }
});

const hasuraClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    }
  }
});

export default hasuraClient;