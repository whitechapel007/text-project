import "./App.css";
import { Container } from "./App.styles";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import GetUsers from "./components/GetUsers";
import Header from "./components/Header";

// https://analytics-api.herokuapp.com/analytics

const link = from([
  new HttpLink({ uri: "https://analytics-api.herokuapp.com/analytics" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Header />
        <GetUsers />
      </Container>
    </ApolloProvider>
  );
}

export default App;
