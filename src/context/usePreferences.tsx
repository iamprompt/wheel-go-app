import AsyncStorage from '@react-native-async-storage/async-storage'
import type { FC, ReactNode } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

interface Preferences {
  appLanguage: string
  setLanguage: (lang: string) => void
}

const DefaultPreferences = {
  appLanguage: 'th',
  setLanguage: async (_lang: string) => {
    throw new Error('setLanguage is not implemented')
  },
} satisfies Preferences

const PreferencesContext = createContext<Preferences>(DefaultPreferences)

export const usePreferences = () => useContext(PreferencesContext)

const usePreferencesProvider = (): Preferences => {
  const [appLanguage, setAppLanguage] = useState(DefaultPreferences.appLanguage)

  const setLanguage = async (lang: string) => {
    await AsyncStorage.setItem('appLanguage', lang)
    setAppLanguage(lang)
  }

  const readLanguage = async () => {
    const item = await AsyncStorage.getItem('appLanguage')
    if (item) {
      setAppLanguage(item)
    } else {
      await AsyncStorage.setItem('appLanguage', appLanguage)
    }
  }

  useEffect(() => {
    readLanguage()
  }, [])

  return {
    appLanguage,
    setLanguage,
  }
}

export const PreferencesProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const preferences = usePreferencesProvider()

  return (
    <PreferencesContext.Provider value={preferences}>
      {children}
    </PreferencesContext.Provider>
  )
}
