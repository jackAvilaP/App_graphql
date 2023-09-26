import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  cache:new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/graphql",
  }),
});





ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider >
);
