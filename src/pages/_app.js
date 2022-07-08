import '../styles/globals.css'
import { ApolloProvider, InMemoryCache, ApolloClient  } from '@apollo/client'
import { ProviderAuth } from '@hooks/useAuth'

const client = new ApolloClient({
  uri: "https://petgram-server-edmundo0994.vercel.app/graphql",
  cache: new InMemoryCache()
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
