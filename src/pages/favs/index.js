import MainLayout from "@layouts/MainLayout"
import { useAuth } from "@hooks/useAuth"
import Favotires from "@components/Favorites"
import { useRouter } from "next/router"

export default function Favs() {
  const { isAuth } = useAuth()
  const router = useRouter()

  if (!isAuth){
    router.push("/login")
  }

  return (
    <MainLayout>
      <Favotires />
    </MainLayout>
  )
}