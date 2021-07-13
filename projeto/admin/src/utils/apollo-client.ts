import {WebSocketLink} from "@apollo/client/link/ws";
import {ApolloClient, HttpLink, InMemoryCache, split} from "@apollo/client";
import {getMainDefinition} from "@apollo/client/utilities";
import {setContext} from "@apollo/client/link/context";
import firebaseAuthProvider from "./firebase-auth-provider";

const hasuraUrlHttp = 'http://localhost:8080/v1/graphql';
const hasuraUrlWs = 'ws://localhost:8080/v1/graphql';

const httpLink = new HttpLink({
    uri: hasuraUrlHttp,
});

const wsLink = new WebSocketLink({
    uri: hasuraUrlWs,
    options: {
        lazy: true,
        reconnect: true,
        // I think setContext doesn't work for websockets as they are stateful. You can only set the connection params
        // once, which happens at the start of the connection.
        // setContext was made for stateless protocols such as HTTP
        connectionParams: async () => {
            const jwt = await firebaseAuthProvider.getJWTToken();
            return {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            }
        }
    },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const authLink = setContext(async req => {
    const token = await firebaseAuthProvider.getJWTToken();
    console.log('token in authlink: ', token);
    return {
        headers: {
            Authorization: `Bearer ${token ?? ''}`,
        }
    }
});

const apolloClient = new ApolloClient({
    link: authLink.concat(splitLink),
    cache: new InMemoryCache()
});

export default apolloClient;