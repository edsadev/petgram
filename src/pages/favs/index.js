import MainLayout from "@layouts/MainLayout"
import { useAuth } from "@hooks/useAuth"
import NotRegisteredUser from "@components/NotRegisteredUser"
import Favotires from "@components/Favorites"

export default function Favs() {
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
      <Favotires />
    </MainLayout>
  )
}