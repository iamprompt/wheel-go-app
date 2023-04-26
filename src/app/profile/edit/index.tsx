import { Image } from 'expo-image'
import { Stack } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { ScrollView, View } from 'react-native'
import { useAuth } from '~/context/useAuth'
import { useGetMyProfileQuery } from '~/generated-types'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

export default function Page() {
  const { t } = useTranslation()
  const { user } = useAuth()
  const { data } = useGetMyProfileQuery()

  if (!user) {
    return null
  }

  return (
    <ScrollView style={[GlobalStyle.container, { flexDirection: 'column' }]}>
      <Stack.Screen
        options={{
          title: t('profile.edit.title') || '',
          headerShown: true,
        }}
      />

      <View
        style={{
          paddingTop: 24,
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            alignItems: 'center',
            marginBottom: 16,
            alignSelf: 'center',
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
              width: 96,
              height: 96,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              paddingHorizontal: 8,
              paddingVertical: 8,
              backgroundColor: COLORS.magenta[500],
              borderRadius: 96,
            }}
          >
            <MaterialIcons
              name="camera_alt"
              size={16}
              color={COLORS.white}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
