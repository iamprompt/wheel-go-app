import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { useEffect } from 'react'

import * as SplashScreen from 'expo-splash-screen'

import '~/utils/network'
import FONTS, { loadFonts } from '~/styles/fonts'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
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
      <Stack
        screenOptions={{
          headerShown: false,
          headerTitleStyle: {
            fontFamily: FONTS.LSTH_BOLD,
            fontSize: 20,
          },
        }}
      />
    </QueryClientProvider>
  )
}

export default RootLayout
