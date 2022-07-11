import MainLayout from "@layouts/MainLayout"
import NotRegisteredUser from "@components/NotRegisteredUser"
import { useAuth } from "@hooks/useAuth"

export default function login() {
  return (
    <MainLayout>
      <NotRegisteredUser />
    </MainLayout>
  )
}
