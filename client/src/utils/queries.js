import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetCampSiteSchema {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));
