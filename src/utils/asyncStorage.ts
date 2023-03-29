import AsyncStorage from '@react-native-async-storage/async-storage'
import i18next from 'i18next'

export const readAppLanguage = async (fallbackLanguage = 'th') => {
  const storageLanguage = await AsyncStorage.getItem('appLanguage')
  const language = storageLanguage || fallbackLanguage
  i18next.changeLanguage(language)
  return language
}

export const setAppLanguage = async (language: string) => {
  i18next.changeLanguage(language)
  await AsyncStorage.setItem('appLanguage', language)
}
