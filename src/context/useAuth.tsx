import { useRouter } from 'expo-router'
import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { LoginUser, MeProfile } from '~/graphql/mutation/auth'
import {
  getUserToken,
  removeUserToken,
  setUserToken,
} from '~/utils/asyncStorage'
import { WheelGoGraphQL } from '~/utils/graphql'
import { getGravatarUrl } from '~/utils/gravatar'

interface AuthContextData {
  signin: (email: string, password: string) => Promise<void>
  signout: () => void
  user: null | User
}

interface User {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
  image: string
  impairmentLevel: string
  equipment?: string
}

const DefaultAuthContextData = {
  signin: () => {
    throw new Error('signin is not implemented')
  },
  signout: () => {
    throw new Error('signout is not implemented')
  },
  user: null,
} satisfies AuthContextData

const authContext = createContext<AuthContextData>(DefaultAuthContextData)

export function useAuth() {
  return useContext(authContext)
}

function useAuthProvider() {
  const router = useRouter()
  const [user, setUser] = useState<null | User>(null)

  const handleUserChange = async () => {
    const token = await getUserToken()

    if (!token) {
      setUser(null)
      return
    }

    const result = await WheelGoGraphQL(MeProfile, {})

    if (!result || !result.meUser) {
      throw new Error('Login failed')
    }

    const { user } = result.meUser

    if (user) {
      setUser({
        id: user.id || '',
        username: user.username || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        image: getGravatarUrl(user.email || ''),
        impairmentLevel: user.impairmentLevel?.replace('_', '') || '',
        equipment: user.equipment || '',
      })
    }
  }

  useEffect(() => {
    handleUserChange()
  }, [])

  const signin = async (email: string, password: string) => {
    const result = await WheelGoGraphQL(LoginUser, {
      email,
      password,
    })

    if (!result || !result.loginUser) {
      throw new Error('Login failed')
    }

    const { token } = result.loginUser

    await setUserToken(token!)
    await handleUserChange()

    router.replace('/')
  }

  const signout = async () => {
    await removeUserToken()
    setUser(null)
  }

  return {
    signin,
    signout,
    user,
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuthProvider()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}
