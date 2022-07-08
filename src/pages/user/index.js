import MainLayout from "@layouts/MainLayout"
import { useAuth } from "@hooks/useAuth"
import NotRegisteredUser from "@components/NotRegisteredUser"

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
      <h1>Users</h1>
    </MainLayout>
  )
}