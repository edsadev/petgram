import { useEffect, useState } from "react"
import { useLoginMutation } from "@hooks/useLoginMutation"
import { useRegisterMutation } from "@hooks/useRegisterMutation"
import { useAuth } from "@hooks/useAuth"
import UserForm from "@common/UserForm"

export default function NotRegisteredUser(){
  const { register, dataRegister, loadingRegister, errorRegister } = useRegisterMutation()
  const { signIn, dataLogin, loadingLogin, errorLogin } = useLoginMutation()
  const [contLog, setContLog] = useState(true) // Controls the behavior to chose from log in or register
  const { activateAuth } = useAuth()

  useEffect(() => {
    if (dataLogin) {
      activateAuth(dataLogin?.login)
    } else if (dataRegister){
      activateAuth(dataRegister?.signup)
    }
  }, [dataLogin, dataRegister, activateAuth])

  const handleChange = () => {
    setContLog(!contLog)
  }

  return (
    <>
      {
        contLog 
          ? <UserForm disabled={loadingRegister} error={errorRegister} onSubmit={register} title={"Register"} change={() => handleChange()} />
          : <UserForm disabled={loadingLogin} error={errorLogin} onSubmit={signIn} title={"Login"} change={() => handleChange()} />
      }
    </>
  )
}