import { useRouter } from 'expo-router'
import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import * as Burnt from 'burnt'
import { useGetMyProfileLazyQuery, useLoginMutation } from '~/generated-types'
import {
  getUserToken,
  removeUserToken,
  setUserToken,
} from '~/utils/asyncStorage'
import { getGravatarUrl } from '~/utils/gravatar'
import COLORS from '~/styles/colors'

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

  const [getProfile] = useGetMyProfileLazyQuery()
  const [loginUser] = useLoginMutation()

  const handleUserChange = async () => {
    const token = await getUserToken()

    if (!token) {
      setUser(null)
      return
    }

    const result = await getProfile()

    if (!result || !result.data?.me) {
      throw new Error('Get User Profile Failed')
    }

    const { me } = result.data

    if (!me) {
      setUser(null)
      return
    }

    const userFormat = {
      id: me.id || '',
      username: me.username || '',
      firstName: me.firstname || '',
      lastName: me.lastname || '',
      email: '',
      image: getGravatarUrl(''),
      impairmentLevel: '',
      equipment: '',
    }

    setUser(userFormat)

    return userFormat
  }

  useEffect(() => {
    handleUserChange()
  }, [])

  const signin = async (email: string, password: string) => {
    const { data, errors } = await loginUser({
      variables: {
        email,
        password,
      },
    })

    console.log(data, errors)

    if (!data) {
      throw new Error('Login failed')
    }

    const { accessToken, refreshToken } = data.login

    await setUserToken(accessToken, refreshToken)
    const u = await handleUserChange()

    Burnt.toast({
      title: "You're logged in!", // required
      message: `Welcome back ${u?.firstName}!`,
      preset: 'custom',
      haptic: 'success',
      duration: 2,
      icon: {
        ios: { name: 'person.fill', color: COLORS.magenta[500] },
      },
    })

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
