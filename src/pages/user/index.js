import MainLayout from "@layouts/MainLayout"
import { useAuth } from "@hooks/useAuth"
import User from "@components/User"
import { useRouter } from "next/router"
import Head from "next/head"

export default function Users() {
  const { isAuth } = useAuth()
  const router = useRouter()

  if (!isAuth){
    router.push("/login")
  }

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