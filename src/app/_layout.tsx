import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { useEffect } from 'react'

import * as SplashScreen from 'expo-splash-screen'

import '~/i18n'
import '~/utils/dayjs'
import '~/utils/network'
import FONTS, { loadFonts } from '~/styles/fonts'
import { PreferencesProvider } from '~/context/usePreferences'
import { HeaderBackButton } from '~/components/HeaderBackButton'

SplashScreen.preventAutoHideAsync()

function RootLayout() {
  const [fontsLoaded] = loadFonts()

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync()
    }

    if (fontsLoaded) {
      hideSplashScreen()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <QueryClientProvider client={new QueryClient()}>
      <PreferencesProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            headerTitleStyle: {
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 20,
            },
            headerBackTitleStyle: {
              fontFamily: FONTS.LSTH_BOLD,
            },
            headerBackTitleVisible: false,
            headerLeft: HeaderBackButton,
          }}
        />
      </PreferencesProvider>
    </QueryClientProvider>
  )
}

export default RootLayout
