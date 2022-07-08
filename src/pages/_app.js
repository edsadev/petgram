import '../styles/globals.css'
import { ApolloProvider, InMemoryCache, ApolloClient  } from '@apollo/client'

const client = new ApolloClient({
  uri: "https://petgram-server-edmundo0994.vercel.app/graphql",
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
