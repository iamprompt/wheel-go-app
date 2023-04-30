import { useRouter, useSearchParams } from 'expo-router'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderBackButton } from '~/components/HeaderBackButton'
import { PlaceItem } from '~/components/PlaceItem'
import type { Place_Types } from '~/generated-types'
import { useGetPlacesLazyQuery } from '~/generated-types'
import { GlobalStyle } from '~/styles'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'

function Page() {
  const { t } = useTranslation()
  const insets = useSafeAreaInsets()
  const router = useRouter()

  const HeaderBackButtonElement = HeaderBackButton()

  const { category } = useSearchParams<{ category: string }>()

  const [getPlaces, { data: placesData }] = useGetPlacesLazyQuery()

  useEffect(() => {
    if (category) {
      getPlaces({
        variables: {
          type: [category as Place_Types],
        },
      })
    }
  }, [category])

  return (
    <View style={[GlobalStyle.container]}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          paddingTop: insets.top + 16,
          paddingHorizontal: 16,
          paddingBottom: 16,
          borderBottomColor: COLORS.soap[100],
          borderBottomWidth: 1,
          gap: 12,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.white,
          zIndex: 1,
        }}
      >
        <HeaderBackButtonElement />
        <View
          style={{
            flex: 1,
            height: 48,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.LSTH_BOLD,
              flex: 1,
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            {t(`categories.${category}`)}
          </Text>
        </View>
      </View>

      <ScrollView bounces={false}>
        <View
          style={{
            paddingTop: insets.top + 81,
            paddingBottom: insets.bottom,
            flex: 1,
          }}
        >
          {placesData?.getPlaces?.map((place) => {
            if (!place) {
              return null
            }

            return (
              <PlaceItem
                key={`nearby-${place.id}`}
                name={getDisplayTextFromCurrentLanguage({
                  th: place.name?.th,
                  en: place.name?.en,
                })}
                rating={4.5}
                category={place.type!}
                date="2021-08-01"
                onPress={() => {
                  router.push(`/places/${place.id}`)
                }}
                borderBottom
              />
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Page
