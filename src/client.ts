import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
} from '@apollo/client';

// The reason for apollo client is for the inMemoryCache.
// If a graphQl query an endpoint is sent, this will be stored in the cache and use that

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: process.env.WP_GRAPHQL_URL,
    cache: new InMemoryCache(),
});

export default client;
