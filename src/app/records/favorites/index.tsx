import { Stack } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PlaceItem } from '~/components/PlaceItem'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

export default function Page() {
  const insets = useSafeAreaInsets()
  const { t } = useTranslation()

  return (
    <ScrollView style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          title: '',
          headerShown: true,
          headerTransparent: true,
        }}
      />

      <View
        style={{
          marginTop: insets.top + 44 + 16,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            gap: 12,
          }}
        >
          <View
            style={{
              padding: 12,
              backgroundColor: COLORS.pomegranate[300],
              borderRadius: 35,
              width: 70,
              height: 70,
              borderColor: COLORS.white,
              borderWidth: 3,
              shadowColor: COLORS.black,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            <MaterialIcons name="favorite" size={40} color={COLORS.white} />
          </View>
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              fontSize: 20,
              color: COLORS.pomegranate[300],
            }}
          >
            {t('records.favorite_places')}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.LSTH_REGULAR,
              fontSize: 14,
              color: COLORS['french-vanilla'][500],
            }}
          >
            3 {t('units.places')}
          </Text>
        </View>
        <View
          style={{
            marginTop: 24,
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <PlaceItem
              key={i}
              name="คณะเทคโนโลยีสารสนเทศและการสื่อสาร"
              rating={4.5}
              category="building"
              date="2023-03-03"
              onPress={() => {
                console.log('onPress')
              }}
              borderTop={i === 0}
              borderBottom
            />
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
