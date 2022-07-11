import MainLayout from "@layouts/MainLayout"
import Favotires from "@components/Favorites"
import Head from "next/head"

export default function Favs() {
  return (
    <>
      <Head>
        <title>{"Petgram - Tus favoritos"}</title>
        <meta property="og:title" content={"Tus favoritos"} />
      </Head>
      <MainLayout>
        <Favotires />
      </MainLayout>
    </>
  )
}