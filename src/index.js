import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import appReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { RetryLink } from "@apollo/client/link/retry";

const store = createStore(appReducers);

const directionalLink = new RetryLink().split(
  (operation) => operation.getContext().version === 1,
  new HttpLink({ uri: "localhost:8080/api/graphql" }),
  new HttpLink({ uri: "localhost:8080/api/admin/graphql" })
);

const authLink = setContext((_, { headers }) => {
  const data = JSON.parse(sessionStorage.getItem("userToken"));
  const token = data.data;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(directionalLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
