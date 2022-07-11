import Homepage from '@components/Homepage'
import MainLayout from '@layouts/MainLayout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Petgram - Tu app de animales favorita"}</title>
        <meta name="description" content={"Esta es una red social hecha para todos los amantes de animales domésticos"} />
        <meta property="og:title" content={"Petgram"} />
        <meta property="og:description" content={"Esta es una red social hecha para todos los amantes de animales domésticos"} />
        <meta property="og:site_name" content={"Petgram.com"} />
        <meta property="twitter:creator" content={"Edmundo Salamanca"} />
      </Head>
      <MainLayout>
        <Homepage />
      </MainLayout>
    </>
  )
}
