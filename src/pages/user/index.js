import MainLayout from "@layouts/MainLayout"
import { useAuth } from "@hooks/useAuth"
import User from "@components/User"
import { useRouter } from "next/router"

export default function Users() {
  const { isAuth } = useAuth()
  const router = useRouter()

  if (!isAuth){
    router.push("/login")
  }

  return (
    <MainLayout>
      <User />
    </MainLayout>
  )
}