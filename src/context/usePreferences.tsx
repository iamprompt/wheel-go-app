import AsyncStorage from '@react-native-async-storage/async-storage'
import { getLocales } from 'expo-localization'
import type { FC, ReactNode } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

interface Preferences {
  appLanguage: string
  setLanguage: (lang: string) => void
  tutorialShown: boolean
  setTutorialShown: (tutorialShown: boolean) => void
}

const DefaultPreferences = {
  appLanguage: 'th',
  setLanguage: async (_lang: string) => {
    throw new Error('setLanguage is not implemented')
  },
  tutorialShown: false,
  setTutorialShown: async (_tutorialShown: boolean) => {
    throw new Error('setTutorialShown is not implemented')
  },
} satisfies Preferences

const PreferencesContext = createContext<Preferences>(DefaultPreferences)

export const usePreferences = () => useContext(PreferencesContext)

const usePreferencesProvider = (): Preferences => {
  const [appLanguage, setAppLanguage] = useState(DefaultPreferences.appLanguage)
  const [tutorialShown, setTutorialShown] = useState(false)

  const setLanguage = async (lang: string) => {
    await AsyncStorage.setItem('appLanguage', lang)
    setAppLanguage(lang)
  }

  const readLanguage = async () => {
    const item = await AsyncStorage.getItem('appLanguage')
    if (item) {
      setAppLanguage(item)
    } else {
      const deviceLanguage = getLocales()[0].languageCode
      const deviceLanguageIsSupported = ['th', 'en'].includes(deviceLanguage)
      await AsyncStorage.setItem(
        'appLanguage',
        deviceLanguageIsSupported ? deviceLanguage : appLanguage
      )
    }
  }

  const setTutorial = async () => {
    await AsyncStorage.setItem('tutorialShown', 'true')
    setTutorialShown(true)
  }

  const readTutorial = async () => {
    const item = await AsyncStorage.getItem('tutorialShown')
    if (item) {
      setTutorialShown(Boolean(item))
    } else {
      await AsyncStorage.setItem('tutorialShown', 'false')
    }
  }

  useEffect(() => {
    readLanguage()
    readTutorial()
  }, [])

  return {
    appLanguage,
    setLanguage,
    tutorialShown,
    setTutorialShown: setTutorial,
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
