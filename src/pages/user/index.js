import MainLayout from "@layouts/MainLayout"
import User from "@components/User"
import Head from "next/head"

export default function Users() {
  return (
    <>
      <Head>
        <title>{"Petgram - Usuario"}</title>
        <meta property="og:title" content={"Usuario"} />
      </Head>
      <MainLayout>
        <User />
      </MainLayout>
    </>
  )
}