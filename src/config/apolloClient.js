import { ApolloClient, InMemoryCache } from "@apollo/client";
import { URI_APOLLO } from "../constants";

const client = new ApolloClient({
  uri: URI_APOLLO,
  cache: new InMemoryCache(),
});

export default client