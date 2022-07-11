import '../styles/globals.css'
import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink, from, ApolloLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { ProviderAuth, useAuth } from '@hooks/useAuth'

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

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token")
  console.log("entre a authMiddleware")
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }));

  return forward(operation);
});

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
    <ProviderAuth>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ProviderAuth>
  )
}

export default MyApp
