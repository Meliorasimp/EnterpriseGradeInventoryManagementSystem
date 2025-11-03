import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://localhost:7009/graphql",
    // Allow self-signed certificates in development
    fetchOptions: {
      mode: "cors",
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
