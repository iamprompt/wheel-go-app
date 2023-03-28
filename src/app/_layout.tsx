import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack, useNavigation } from 'expo-router'
import { useEffect } from 'react'

import * as SplashScreen from 'expo-splash-screen'

import '~/utils/network'
import { View } from 'react-native'
import FONTS, { loadFonts } from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { PreferencesProvider } from '~/context/usePreferences'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const navigation = useNavigation()
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
            headerLeft: (_props) => {
              return (
                <View>
                  <MaterialIcons
                    name="chevron_left"
                    size={28}
                    onPress={(_e) => {
                      navigation.canGoBack() && navigation.goBack()
                    }}
                  />
                </View>
              )
            },
          }}
        />
      </PreferencesProvider>
    </QueryClientProvider>
  )
}

export default RootLayout
