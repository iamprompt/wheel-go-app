import { Stack, useNavigation, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { DrawerActions } from '@react-navigation/routers'
import { useTranslation } from 'react-i18next'

// import ClusterMapView from 'react-native-map-clustering'
import { useEffect, useRef, useState } from 'react'

import { MapCameraConfig, MapStyle } from '~/const/map'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { GlobalStyle } from '~/styles'
import { NearbyPlaceBlock } from '~/components/NearbyPlaceBlock'
import { PlaceExploreModal } from '~/components/PlaceExploreModal'
import { HeaderLogo } from '~/components/HeaderLogo'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import {
  Place_Types,
  useGetNearbyPlacesLazyQuery,
  useGetPlaceByIdLazyQuery,
  useGetPlacesQuery,
  useGetPreDefinedRoutesQuery,
} from '~/generated-types'
import { TraceCTAButton } from '~/components/TraceCTAButton'
import { getCurrentPosition } from '~/utils/location'
import { PLACE_TYPES_META } from '~/const/placeTypes'
import { MapPrefsModal } from '~/components/MapPrefsModal'
import { Modal } from '~/components/Modal'

export default function App() {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const router = useRouter()

  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null)
  const [isModalVisible, setModalVisible] = useState(false)

  const { data: placesData } = useGetPlacesQuery()
  const { data: routesData } = useGetPreDefinedRoutesQuery()

  const [getSelectedPlace, { data: place }] = useGetPlaceByIdLazyQuery()

  const [getNearbyPlaces] = useGetNearbyPlacesLazyQuery()

  const mapRef = useRef<MapView>(null)

  const handleCurrentLocation = async () => {
    if (!mapRef.current) {
      return
    }

    try {
      const {
        coords: { latitude, longitude },
      } = await getCurrentPosition()

      mapRef.current.animateCamera({
        center: { latitude, longitude },
        zoom: 18,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSelectPlace = async (placeId: string) => {
    setSelectedPlaceId(placeId)

    try {
      const { data } = await getSelectedPlace({
        variables: {
          id: placeId,
        },
      })

      if (data && data.getPlaceById) {
        mapRef.current?.animateCamera(
          {
            center: {
              latitude: data.getPlaceById.location!.lat,
              longitude: data.getPlaceById.location!.lng,
            },
            zoom: 18,
          },
          { duration: 250 }
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetNearbyPlaces = async () => {
    try {
      const {
        coords: { latitude, longitude },
      } = await getCurrentPosition()

      const { data } = await getNearbyPlaces({
        variables: {
          lat: latitude,
          lng: longitude,
          radius: 2000,
          limit: 1,
          type: [Place_Types.Building, Place_Types.Food, Place_Types.Cafe],
        },
      })

      if (data && data.getPlaces?.[0]) {
        const { id } = data.getPlaces[0]
        handleSelectPlace(id)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetNearbyPlaces()
  }, [])

  return (
    <View style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          title: t('page.explore')!,
          headerTitle: HeaderLogo,
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 16 }}>
                <MaterialIcons
                  name="menu"
                  size={24}
                  onPress={() =>
                    navigation.dispatch(DrawerActions.openDrawer())
                  }
                />
              </View>
            )
          },
          headerRight: () => {
            return (
              <Pressable
                style={{ marginRight: 16 }}
                onPress={() => {
                  router.push('/search')
                }}
              >
                <MaterialIcons name="search" size={24} />
              </Pressable>
            )
          },
        }}
      />

      <StatusBar style="auto" />
      <View
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <MapView
          ref={mapRef}
          style={{
            flex: 1,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          followsUserLocation={true}
          customMapStyle={MapStyle}
          rotateEnabled={false}
          pitchEnabled={false}
          {...MapCameraConfig}
        >
          {placesData?.getPlaces.map((place) => {
            if (!place || !place.location) {
              return null
            }

            const typeMeta =
              PLACE_TYPES_META[place.type!] || PLACE_TYPES_META.BUILDING

            const isPlaceSelected = selectedPlaceId === place.id
            const stateIcon = isPlaceSelected
              ? typeMeta.mapIcon.selected
              : typeMeta.mapIcon.default

            return (
              <Marker
                key={place.id}
                coordinate={{
                  latitude: place.location.lat,
                  longitude: place.location.lng,
                }}
                onPress={() => {
                  if (isPlaceSelected || place.type === Place_Types.Curbcut) {
                    return
                  }

                  handleSelectPlace(place.id)
                }}
                anchor={stateIcon.centerOffset}
              >
                <Image source={stateIcon.file} style={stateIcon.size} />
              </Marker>
            )
          })}
        </MapView>
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0,
            marginHorizontal: 16,
          }}
        >
          <View
            style={{
              alignSelf: 'center',
              marginBottom: 16,
            }}
          >
            <TraceCTAButton
              onPress={() => {
                router.push('/tracing')
              }}
            />
          </View>

          {selectedPlaceId !== null ? (
            <NearbyPlaceBlock
              name={place?.getPlaceById.name || undefined}
              category={place?.getPlaceById.type || undefined}
              onPress={() => {
                console.log('Pressed NearbyPlaceBlock')
                setModalVisible(true)
              }}
            />
          ) : null}
        </View>
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: 72,
            gap: 8,
            marginHorizontal: 16,
            marginVertical: 16,
          }}
        >
          <Pressable
            style={{
              backgroundColor: 'white',
              padding: 8,
              borderRadius: 8,
              ...GlobalStyle.shadow,
            }}
            onPress={() => {
              console.log('Pressed Preferences')
            }}
          >
            <MaterialIcons name="tune" size={24} color={COLORS.magenta[500]} />
          </Pressable>
          <Pressable
            style={{
              backgroundColor: 'white',
              padding: 8,
              borderRadius: 8,
              ...GlobalStyle.shadow,
            }}
            onPress={() => handleCurrentLocation()}
          >
            <MaterialIcons name="near_me" size={24} color={COLORS.info[400]} />
          </Pressable>
        </View>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            marginHorizontal: 16,
            marginVertical: 16,
          }}
        >
          <Pressable
            style={{
              backgroundColor: 'white',
              height: 48,
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 12,
              ...GlobalStyle.shadow,
            }}
            onPress={() => {
              console.log('Pressed Search')
              router.push('/routes')
            }}
          >
            <MaterialIcons
              name="square"
              size={12}
              color={COLORS['fruit-punch'][400]}
            />
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                fontFamily: FONTS.LSTH_REGULAR,
                fontSize: 16,
                color: COLORS['french-vanilla'][300],
              }}
            >
              {t('explore.search_route_placeholder')}
            </Text>
          </Pressable>
        </View>
      </View>

      {selectedPlaceId ? (
        <PlaceExploreModal
          placeId={selectedPlaceId}
          isVisible={isModalVisible}
          onClose={() => {
            setModalVisible(false)
            setSelectedPlaceId(null)
          }}
        />
      ) : null}

      <Modal isVisible={true} modal={MapPrefsModal} onClose={() => {}} />
    </View>
  )
}
