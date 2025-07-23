import { ApolloClient, InMemoryCache } from '@apollo/client';

export const makeApolloClient = () =>
  new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
  });
