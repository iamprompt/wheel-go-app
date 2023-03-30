import AsyncStorage from '@react-native-async-storage/async-storage'
import { getLocales } from 'expo-localization'
import type { FC, ReactNode } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

import * as AsyncStorageUtils from '~/utils/asyncStorage'

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

export function usePreferences() {
  return useContext(PreferencesContext)
}

function usePreferencesProvider(): Preferences {
  const [appLanguage, setAppLanguage] = useState(DefaultPreferences.appLanguage)
  const [tutorialShown, setTutorialShown] = useState(false)

  const setLanguage = async (lang: string) => {
    await AsyncStorageUtils.setAppLanguage(lang)
    setAppLanguage(lang)
  }

  const readLanguage = async () => {
    const deviceLanguage = getLocales()[0].languageCode
    const deviceLanguageIsSupported = ['th', 'en'].includes(deviceLanguage)
    const fallbackLang = deviceLanguageIsSupported
      ? deviceLanguage
      : appLanguage

    const language = await AsyncStorageUtils.readAppLanguage(fallbackLang)
    setAppLanguage(language)
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
