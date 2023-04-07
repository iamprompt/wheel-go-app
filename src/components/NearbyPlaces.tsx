import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location'
import { useRouter } from 'expo-router'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { PlaceItem } from './PlaceItem'
import { allPlaces } from '~/graphql/query/places'
import FONTS from '~/styles/fonts'
import { getNearestPlaces } from '~/utils/geo'
import { useGraphQL } from '~/utils/useGraphQL'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'

export function NearbyPlaces() {
  const { t } = useTranslation()

  const router = useRouter()

  const [[lat, lng], setLatlng] = useState([0, 0])

  const { data } = useGraphQL(true, allPlaces)

  const getCurrentLocation = async () => {
    const { status } = await requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.log('Permission to access location was denied')
      return
    }

    const location = await getCurrentPositionAsync({})
    setLatlng([location.coords.latitude, location.coords.longitude])
  }

  const nearbyPlaces = useMemo(() => {
    if (!data?.Places || !lat || !lng) {
      return []
    }

    return (
      getNearestPlaces(data, {
        lat,
        lng,
        limit: 3,
        exclude: [],
      }) || []
    )
  }, [data, data?.Places, lat, lng])

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <View
      style={{
        paddingVertical: 24,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.LSTH_BOLD,
          fontSize: 16,
          paddingHorizontal: 16,
        }}
      >
        {t('search.near_me')}
      </Text>

      <View>
        {nearbyPlaces.map((place) => (
          <PlaceItem
            key={`nearby-${place.id}`}
            name={getDisplayTextFromCurrentLanguage({
              th: place.nameTH,
              en: place.nameEN,
            })}
            rating={4.5}
            category={place.category!}
            date="2021-08-01"
            onPress={() => {
              router.push(`/places/${place.id}`)
            }}
            borderBottom
          />
        ))}
      </View>
    </View>
  )
}
