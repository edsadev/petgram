import { gql, useMutation } from "@apollo/client"

// QGL Querys:
const REGISTER = gql`
	mutation signup ($input: UserCredentials!) {
		signup (input: $input)
	}
`
export function useRegisterMutation() {
  const [signup, { data, loading, error }] = useMutation(REGISTER)

  const register = async (email, password) => {
    try {
      await signup({ variables: { input: { email: email, password: password } }})
    } catch (e) {
      console.log(e.message)
    }
  }

  return {
    register,
    dataRegister: data,
    loadingRegister: loading,
    errorRegister: error,
  }
}