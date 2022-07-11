import '../styles/globals.css'
import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { ProviderAuth } from '@hooks/useAuth'
import Head from 'next/head'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-edmundo0994.vercel.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token")
  return {
      headers: {
          ...headers,
      authorization: token ? `Bearer ${token}` : "",
      },
  }
})

const errorLink = onError(({ graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  }
  if (networkError) {
    window.sessionStorage.removeItem("token")
    window.location.href = "/"
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, errorLink, httpLink]),
})

function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <title>{"Petgram - Tu app de animales favorita"}</title>
        <meta name="description" content={"Esta es una red social hecha para todos los amantes de animales domésticos"} />
        <meta property="og:title" content={"Petgram"} />
        <meta property="og:description" content={"Esta es una red social hecha para todos los amantes de animales domésticos"} />
        <meta property="og:site_name" content={"Petgram.com"} />
        <meta property="twitter:creator" content={"Edmundo Salamanca"} />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <ProviderAuth>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ProviderAuth>
    </>
  )
}

export default MyApp
