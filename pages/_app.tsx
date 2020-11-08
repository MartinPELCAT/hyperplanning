import { AppProps } from "next/app";
import React from "react";
import "../styles/tailwind.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "apollo/client";
import { AuthenticatedUserContextProvider } from "contexts/AuthenticatedUserContext";

export default function App({ Component, pageProps }: AppProps) {
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

//https://www.behance.net/gallery/107127041/WeCal?tracking_source=search_projects_recommended%7Ccalendar%20web
