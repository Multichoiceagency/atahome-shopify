import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://atahome.multichoiceagency.nl/graphql', // Vervang met je WordPress GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
