import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import appReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const store = createStore(appReducers);

const httpLink = createHttpLink({
  uri: "localhost:8080/api/graphql",
});

const authLink = setContext((_, { headers }) => {
  const {data} = sessionStorage.getItem("userToken");
  return {
    headers: {
      ...headers,
      authorization: data ? `Bearer ${data}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
