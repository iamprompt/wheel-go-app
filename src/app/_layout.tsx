import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect, useState } from 'react'

// import * as SplashScreen from 'expo-splash-screen'

import '~/i18n'
import '~/utils/dayjs'
import '~/utils/network'
import FONTS, { loadFonts } from '~/styles/fonts'
import { PreferencesProvider } from '~/context/usePreferences'
import { HeaderBackButton } from '~/components/HeaderBackButton'
import { AuthProvider } from '~/context/useAuth'
import { WheelGoApolloProvider } from '~/utils/apollo'
import { StoreonProvider } from '~/context/useStoreon'

// TaskManager
import '~/tasks'

// SplashScreen.preventAutoHideAsync()

function RootLayout() {
  const [isReady, setIsReady] = useState(false)
  const [fontsLoaded] = loadFonts()

  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true)
    }
  }, [fontsLoaded])

  if (!isReady) {
    return <SplashScreen />
  }

  return (
    <WheelGoApolloProvider>
      <StoreonProvider>
        <AuthProvider>
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
                  headerLeft: HeaderBackButton(),
                }}
              />
            </PreferencesProvider>
          </QueryClientProvider>
        </AuthProvider>
      </StoreonProvider>
    </WheelGoApolloProvider>
  )
}

export default RootLayout
