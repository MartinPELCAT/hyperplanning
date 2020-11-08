import { AppProps } from "next/app";
import React from "react";
import "../styles/tailwind.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "apollo/client";
import { AuthenticatedUserContextProvider } from "contexts/AuthenticatedUserContext";

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps.authenticatedUser);
  return (
    <ApolloProvider client={client}>
      <AuthenticatedUserContextProvider
        authenticatedUser={pageProps.authenticatedUser}
      >
        <Component {...pageProps} />
      </AuthenticatedUserContextProvider>
    </ApolloProvider>
  );
}
