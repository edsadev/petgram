import MainLayout from "@layouts/MainLayout"
import { useAuth } from "@hooks/useAuth"
import NotRegisteredUser from "@components/NotRegisteredUser"
import User from "@components/User"

export default function Users() {
  const { isAuth } = useAuth()

  if (!isAuth){
    return (
      <MainLayout>
        <NotRegisteredUser />
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <User />
    </MainLayout>
  )
}