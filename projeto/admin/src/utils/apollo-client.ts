import { WebSocketLink } from "@apollo/client/link/ws";
import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import firebaseAuthProvider from "./firebase-auth-provider";
import currentLab from '../globals/current-lab';

const hasuraUrlHttp = 'http://localhost:8080/v1/graphql';
const hasuraUrlWs = 'ws://localhost:8080/v1/graphql';

function link() {
    const getHeaders = async () => {
        const jwt = await firebaseAuthProvider.getJWTToken();
        return {
            headers: {
                Authorization: `Bearer ${jwt}`,
                'x-poli-lab-id': currentLab.id?.toString() ?? 0,
            }
        };
    }

    const httpLink = new HttpLink({
        uri: hasuraUrlHttp,
    });


    const wsLink = new WebSocketLink({
        uri: hasuraUrlWs,
        options: {
            lazy: true,
            reconnect: false,
            // I think setContext doesn't work for websockets as they are stateful. You can only set the connection params
            // once, which happens at the start of the connection.
            // setContext was made for stateless protocols such as HTTP
            connectionParams: getHeaders,
        },
    });

    const authLink = setContext((operation, prevContext) => {
        return getHeaders();
    });

    const splitLink = split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        wsLink,
        authLink.concat(httpLink),
    );

    return splitLink;
}

const apolloClient = new ApolloClient({
    link: link(),
    cache: new InMemoryCache()
});

apolloClient.onResetStore(async () => {
    apolloClient.setLink(link());
});


export default apolloClient;