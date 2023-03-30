import i18n from 'i18next'

export function getDisplayLanguage(
  availableLanguage: string[],
  fallbackLanguage: string
) {
  const language = i18n.language
  if (availableLanguage.includes(language)) {
    return language
  }
  return fallbackLanguage
}
