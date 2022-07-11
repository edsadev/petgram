import MainLayout from "@layouts/MainLayout"
import { useAuth } from "@hooks/useAuth"
import Favotires from "@components/Favorites"
import { useRouter } from "next/router"
import Head from "next/head"

export default function Favs() {
  const { isAuth } = useAuth()
  const router = useRouter()

  if (!isAuth){
    router.push("/login")
  }

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