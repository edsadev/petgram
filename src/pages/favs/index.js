import MainLayout from "@layouts/MainLayout"
import { useAuth } from "@hooks/useAuth"
import NotRegisteredUser from "@components/NotRegisteredUser"

export default function Favs() {
  const { user } = useAuth()

  if (!user.isAuth){
    return (
      <MainLayout>
        <NotRegisteredUser />
      </MainLayout>
    )
  }
  
  return (
    <MainLayout>
      <h1>Favs</h1>
    </MainLayout>
  )
}