import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { PlaceItem } from './PlaceItem'
import FONTS from '~/styles/fonts'
import { Place_Types, useGetNearbyPlacesLazyQuery } from '~/generated-types'
import { getCurrentPosition } from '~/utils/location'

export function NearbyPlaces() {
  const { t } = useTranslation()
  const router = useRouter()

  const [getNearbyPlaces, { data: { getPlaces: places = [] } = {} }] =
    useGetNearbyPlacesLazyQuery()

  const locateCurrentPosition = async () => {
    try {
      const location = await getCurrentPosition()
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
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    locateCurrentPosition()
  }, [])

  if (places.length === 0) {
    return null
  }

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
        {places.map((place) => (
          <PlaceItem
            key={`nearby-${place.id}`}
            name={place.name!}
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
