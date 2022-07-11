import React, { useState, useContext, createContext, useEffect } from 'react'
// import axios from 'axios'
// import Cookie from 'js-cookie'
// import endPoints from '@services/api/'

// CONTEXT:
const AuthContext = createContext()

// PROVIDER:
export function ProviderAuth({ children }) {
  const auth = useProviderAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

// CONSUMER:
export const useAuth = () => {
  return useContext(AuthContext)
}

// PROVIDER HOOK:
function useProviderAuth() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    setIsAuth(() => {
      if (window.sessionStorage.getItem('token')) {
        return window.sessionStorage.getItem('token')
      } 
    })
  }, [setIsAuth])

  const activateAuth = (token) => {
    setIsAuth(token)
    window.sessionStorage.setItem('token', token)
  }

  // const signIn = async (email, password) => {
  //   const options = {
  //     headers: {
  //       accept: '*/*',
  //       'Content-Type': 'application/json',
  //     },
  //   }
  //   const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options)

  //   if (access_token) {
  //     const token = access_token.access_token
  //     Cookie.set('token', token, { expires: 5 })

  //     axios.defaults.headers.Authorization = `Bearer ${token}`
  //     const { data: user } = await axios.get(endPoints.auth.profile)
  //     console.log(user)
  //     setUser(user)
  //   }
  // }

  // const logOut = () => {
  //   Cookie.remove('token')
  //   setUser(null)
  //   delete axios.defaults.headers.Authorization
  //   window.location.href = '/login'
  // }

  return {
    isAuth,
    activateAuth,
  }
}
