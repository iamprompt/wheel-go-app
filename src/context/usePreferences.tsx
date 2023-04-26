import AsyncStorage from '@react-native-async-storage/async-storage'
import { getLocales } from 'expo-localization'
import type { FC, ReactNode } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { Place_Types } from '~/generated-types'

import * as AsyncStorageUtils from '~/utils/asyncStorage'

interface MapViewPreferences {
  places: Place_Types[]
  coditions: string[]
}

interface Preferences {
  appLanguage: string
  setLanguage: (lang: string) => void
  tutorialShown: boolean
  setTutorialShown: (tutorialShown: boolean) => void
  mapViewPreferences: MapViewPreferences
  setMapViewPreferences: (mapViewPreferences: MapViewPreferences) => void
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
  mapViewPreferences: {
    places: [
      Place_Types.Building,
      Place_Types.Cafe,
      Place_Types.Curbcut,
      Place_Types.Food,
      Place_Types.Park,
      Place_Types.Parking,
      Place_Types.Residence,
      Place_Types.Sport,
      Place_Types.Toilet,
      Place_Types.Transport,
    ],
    coditions: [],
  },
  setMapViewPreferences: async (_mapViewPreferences: MapViewPreferences) => {
    throw new Error('setMapViewPreferences is not implemented')
  },
} satisfies Preferences

const PreferencesContext = createContext<Preferences>(DefaultPreferences)

export function usePreferences() {
  return useContext(PreferencesContext)
}

function usePreferencesProvider(): Preferences {
  const [appLanguage, setAppLanguage] = useState(DefaultPreferences.appLanguage)
  const [tutorialShown, setTutorialShown] = useState(false)
  const [mapViewPreferences, setMapViewPreferences] =
    useState<MapViewPreferences>({
      places: [
        Place_Types.Building,
        Place_Types.Cafe,
        Place_Types.Curbcut,
        Place_Types.Food,
        Place_Types.Park,
        Place_Types.Parking,
        Place_Types.Residence,
        Place_Types.Sport,
        Place_Types.Toilet,
        Place_Types.Transport,
      ],
      coditions: [],
    })

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

  const setMapPreferences = async (mapViewPreferences: MapViewPreferences) => {
    await AsyncStorage.setItem(
      'mapViewPreferences',
      JSON.stringify(mapViewPreferences)
    )
    setMapViewPreferences(mapViewPreferences)
  }

  const readMapPreferences = async () => {
    const item = await AsyncStorage.getItem('mapViewPreferences')
    if (item) {
      setMapViewPreferences(JSON.parse(item))
    } else {
      await AsyncStorage.setItem(
        'mapViewPreferences',
        JSON.stringify(mapViewPreferences)
      )
    }
  }

  useEffect(() => {
    readLanguage()
    readTutorial()
    readMapPreferences()
  }, [])

  return {
    appLanguage,
    setLanguage,
    tutorialShown,
    setTutorialShown: setTutorial,
    mapViewPreferences,
    setMapViewPreferences: setMapPreferences,
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
