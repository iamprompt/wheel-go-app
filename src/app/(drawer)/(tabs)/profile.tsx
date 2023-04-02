import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useTranslation } from 'react-i18next'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAuth } from '~/context/useAuth'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'

export default function App() {
  const insets = useSafeAreaInsets()
  const { user } = useAuth()
  const { t } = useTranslation()

  if (!user) {
    return null
  }

  return (
    <ScrollView
      style={[
        GlobalStyle.container,
        {
          paddingTop: insets.top + 16,
          paddingHorizontal: 16,
        },
      ]}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <StatusBar style="auto" />

      <View
        style={{
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <Image
          source={{
            uri: user.image,
            width: 128,
            height: 128,
          }}
          style={{
            borderRadius: 64,
            borderColor: COLORS.magenta[500],
            borderWidth: 4,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: -10,
            paddingHorizontal: 12,
            paddingVertical: 4,
            backgroundColor: COLORS.magenta[500],
            borderRadius: 12,
            borderColor: COLORS['french-vanilla'][300],
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              color: COLORS.white,
              fontSize: 14,
            }}
          >
            Lvl.10
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 16,
          marginBottom: 8,
          textAlign: 'center',
          fontSize: 28,
          fontFamily: FONTS.LSTH_BOLD,
        }}
      >
        {user.firstName} {user.lastName}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: FONTS.LSTH_REGULAR,
          fontSize: 14,
          color: COLORS['french-vanilla'][500],
        }}
      >
        1 - Requires Equipment
      </Text>
      <View
        style={{
          marginTop: 12,
          alignItems: 'center',
        }}
      >
        <Pressable
          onPress={() => {
            console.log('Edit Profile')
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 12,
              color: COLORS.magenta[500],
            }}
          >
            {t('profile.edit_profile')}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}
