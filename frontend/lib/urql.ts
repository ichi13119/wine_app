import { initUrqlClient } from 'next-urql';
import { Client } from 'urql';

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!;

export const urqlClient: () => Client = () => {
  const client = initUrqlClient(
    {
      url: GRAPHQL_ENDPOINT,
    },
    false,
  );

  if (!client) {
    throw new Error('Initialize urql client is failed');
  }
  return client;
};
