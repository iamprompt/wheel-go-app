import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useEffect } from 'react'

import * as SplashScreen from 'expo-splash-screen'

import '~/utils/network'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    'LINESeedSansTH-Bold': require('~/assets/fonts/LINESeedSansTH_A_Bd.otf'),
    'LINESeedSansTH-Regular': require('~/assets/fonts/LINESeedSansTH_A_Rg.otf'),
    'LINESeedSansTH-Thin': require('~/assets/fonts/LINESeedSansTH_A_Th.otf'),
  })

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
            fontFamily: 'LINESeedSansTH-Bold',
            fontSize: 20,
          },
        }}
      />
    </QueryClientProvider>
  )
}

export default RootLayout
