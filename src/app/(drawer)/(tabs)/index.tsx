import { Stack, useNavigation, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps'
import { DrawerActions } from '@react-navigation/routers'
import { useTranslation } from 'react-i18next'

// import ClusterMapView from 'react-native-map-clustering'
import { useRef, useState } from 'react'
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location'
import { MapCameraConfig, MapStyle, PinIcon } from '~/const/map'
import { allPlaces } from '~/graphql/query/places'
import { useGraphQL } from '~/utils/useGraphQL'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { GlobalStyle } from '~/styles'
import { NearbyPlaceBlock } from '~/components/NearbyPlaceBlock'
import { PlaceExploreModal } from '~/components/PlaceExploreModal'
import { HeaderLogo } from '~/components/HeaderLogo'
import { HorizontalDivider } from '~/components/HorizontalDivider'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { GetPreDefinedRoutes } from '~/graphql/query/routes'

export default function App() {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const router = useRouter()

  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null)
  const [isModalVisible, setModalVisible] = useState(false)

  const { data } = useGraphQL(true, allPlaces)

  const { data: routeData } = useGraphQL(true, GetPreDefinedRoutes, {})

  const mapRef = useRef<MapView>(null)

  const handleCurrentLocation = async () => {
    const { status } = await requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      // setErrorMsg('Permission to access location was denied');
      return
    }

    const location = await getCurrentPositionAsync({})
    mapRef.current?.animateCamera(
      {
        center: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        zoom: 16,
      },
      { duration: 500 }
    )
  }

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
          {data?.Places?.docs
            ?.filter((place) => place?.category === 'building')
            .map((place) => {
              if (!place || !place.geolocation) {
                return null
              }

              return (
                <Marker
                  key={place.id}
                  coordinate={{
                    latitude: place?.geolocation[1],
                    longitude: place?.geolocation[0],
                  }}
                  onPress={() => {
                    setSelectedPlaceId(place.id as string)
                    setModalVisible(true)
                  }}
                >
                  <Image
                    source={PinIcon[place.category]}
                    style={{ width: 32, height: 42 }}
                  />
                </Marker>
              )
            })}
          {routeData?.Routes?.docs?.map((route) => {
            return (
              <Polyline
                coordinates={route?.route}
                strokeWidth={5}
                key={route?.id}
                strokeColor={'rgba(67, 196, 99, 0.4)'}
              />
            )
          })}
          {/* {data?.Facilities?.docs?.map((facility) => {
            if (!facility || !facility.geolocation) {
              return null
            }

            const type =
              facility.type === 'curbCut'
                ? 'curbcut'
                : facility.type === 'transportation'
                ? 'bus-stop'
                : facility.type === 'ramp'
                ? 'ramp'
                : null

            if (!type) {
              return null
            }

            return (
              <Marker
                key={facility.id}
                coordinate={{
                  latitude: facility?.geolocation[1],
                  longitude: facility?.geolocation[0],
                }}
                anchor={type === 'curbcut' ? { x: 0.5, y: 0.5 } : undefined}
              >
                <Image
                  source={PinIcon[type]}
                  style={{
                    ...(type === 'bus-stop'
                      ? { width: 32, height: 42 }
                      : { width: 32, height: 32 }),
                  }}
                />
              </Marker>
            )
          })} */}
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
          <NearbyPlaceBlock
            name="Siam Paragon"
            category="building"
            onPress={() => {
              console.log('Pressed NearbyPlaceBlock')
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: 72,
            gap: 8,
            marginHorizontal: 16,
            marginVertical: 16,
            shadowColor: COLORS.black,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: 3.84,
          }}
        >
          <View
            style={{
              borderRadius: 8,
            }}
          >
            <Pressable
              style={{
                backgroundColor: 'white',
                padding: 8,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
              onPress={() => {
                console.log('Pressed Route')
              }}
            >
              <MaterialIcons name="route" size={24} />
            </Pressable>
            <HorizontalDivider />
            <View
              style={{
                borderRadius: 8,
              }}
            >
              <Pressable
                style={{
                  backgroundColor: 'white',
                  padding: 8,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
                onPress={() => {
                  console.log('Pressed MyLocation')
                  handleCurrentLocation()
                }}
              >
                <MaterialIcons name="near_me" size={24} />
              </Pressable>
            </View>
          </View>
          <Pressable
            style={{
              backgroundColor: 'white',
              padding: 8,
              borderRadius: 8,
            }}
            onPress={() => {
              console.log('Pressed MyLocation')
              router.push('/tracing')
            }}
          >
            <MaterialIcons name="draw" size={24} />
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
              shadowColor: COLORS.black,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.2,
              shadowRadius: 3.84,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 12,
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
    </View>
  )
}
