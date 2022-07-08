import { useAuth } from "@hooks/useAuth"
import UserForm from "@common/UserForm"

export default function NotRegisteredUser(){
  const { login } = useAuth()
  return <UserForm login={login} title={"Register"}/>
}