import { Stack, useNavigation, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable, View } from 'react-native'
import type MapView from 'react-native-maps'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { DrawerActions } from '@react-navigation/routers'
import { useTranslation } from 'react-i18next'
// eslint-disable-next-line import/default
import ClusterMapView from 'react-native-map-clustering'
import { useRef, useState } from 'react'
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from 'expo-location'
import { MapStyle, PinIcon } from '~/const/map'
import { allPlaces } from '~/graphql/query/places'
import { useGraphQL } from '~/utils/useGraphQL'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { GlobalStyle } from '~/styles'
import { NearbyPlaceBlock } from '~/components/NearbyPlaceBlock'
import { PlaceExploreModal } from '~/components/PlaceExploreModal'
import { HeaderLogo } from '~/components/HeaderLogo'
import { HorizontalDivider } from '~/components/HorizontalDivider'

export default function App() {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const router = useRouter()

  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null)
  const [isModalVisible, setModalVisible] = useState(false)

  const { data } = useGraphQL(true, allPlaces)

  const mapRef = useRef<MapView>(null)

  const handleCurrentLocation = async () => {
    const { status } = await requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      // setErrorMsg('Permission to access location was denied');
      return
    }

    const location = await getCurrentPositionAsync({})
    mapRef.current?.animateToRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })
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
              <View style={{ marginRight: 16 }}>
                <MaterialIcons name="search" size={24} onPress={() => {}} />
              </View>
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
        <ClusterMapView
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
          initialRegion={{
            latitude: 13.7952296,
            longitude: 100.3229328,
            latitudeDelta: 3.5,
            longitudeDelta: 3.5,
          }}
          initialCamera={{
            center: {
              latitude: 13.7952296,
              longitude: 100.3229328,
            },
            pitch: 0,
            heading: 0,
            zoom: 16,
          }}
        >
          {data?.Places?.docs?.map((place) => {
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
          {data?.Facilities?.docs?.map((facility) => {
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
          })}
        </ClusterMapView>
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
            top: 0,
            gap: 8,
            marginHorizontal: 16,
            marginVertical: 16,
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
