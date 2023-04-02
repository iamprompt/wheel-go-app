import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'
import i18next from 'i18next'

export async function readAppLanguage(fallbackLanguage = 'th') {
  const storageLanguage = await AsyncStorage.getItem('appLanguage')
  const language = storageLanguage || fallbackLanguage
  i18next.changeLanguage(language)
  dayjs.locale(language)
  return language
}

export async function setAppLanguage(language: string) {
  i18next.changeLanguage(language)
  dayjs.locale(language)
  await AsyncStorage.setItem('appLanguage', language)
}

export async function getUserToken() {
  return AsyncStorage.getItem('userToken')
}

export async function setUserToken(token: string) {
  await AsyncStorage.setItem('userToken', token)
}

export async function removeUserToken() {
  await AsyncStorage.removeItem('userToken')
}
