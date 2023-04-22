import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { PlaceItem } from './PlaceItem'
import FONTS from '~/styles/fonts'
import { getDisplayTextFromCurrentLanguage } from '~/utils/i18n'
import { Place_Types, useGetNearbyPlacesLazyQuery } from '~/generated-types'

export function NearbyPlaces() {
  const { t } = useTranslation()

  const router = useRouter()

  const [[lat, lng], setLatlng] = useState([0, 0])

  const [getNearbyPlaces, { data }] = useGetNearbyPlacesLazyQuery()

  const getCurrentLocation = async () => {
    const { status } = await requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.log('Permission to access location was denied')
      return
    }

    const location = await getCurrentPositionAsync({})
    setLatlng([location.coords.latitude, location.coords.longitude])
    getNearbyPlaces({
      variables: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
        radius: 2000,
        type: [
          Place_Types.Building,
          Place_Types.Food,
          Place_Types.Cafe,
          Place_Types.Park,
        ],
      },
    })
  }

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
        {data?.getPlaces.map((place) => (
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
        ))}
      </View>
    </View>
  )
}
