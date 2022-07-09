import { gql, useMutation } from '@apollo/client';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`

export function useLoginMutation() {
  const [login, { data, loading, error }] = useMutation(LOGIN)

  const signIn = async (email, password) => {
    try {
      await login({ variables: { input: { email: email, password: password } }})
    } catch (e){
      console.error(e)
    }
  }

  return {
    signIn,
    dataLogin: data,
    loadingLogin: loading,
    errorLogin: error,
  }
}