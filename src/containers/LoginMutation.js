import { gql, useMutation } from '@apollo/client';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`

export default function LoginMutation() {
  const [login, { dataLogin, loadingLogin, errorLogin }] = useMutation(LOGIN)

  const signIn = async (email, password) => {
    try {
      await login({ variables: { input: { email: email, password: password } }})

      if (data) { 
        console.log(data, "usuario logueado")
        setIsAuth(true)
      }

    } catch (e){
      console.log(e.message)
    }
  }

  return {
    signIn,
    dataLogin,
    loadingLogin,
    errorLogin,
  }
}