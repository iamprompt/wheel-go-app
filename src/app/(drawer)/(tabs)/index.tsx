import { Stack, useNavigation, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, View } from 'react-native'
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { DrawerActions } from '@react-navigation/routers'
import { useTranslation } from 'react-i18next'
// eslint-disable-next-line import/default
import MapView from 'react-native-map-clustering'
import { useState } from 'react'
import { MapStyle, PinIcon } from '~/const/map'
import { allPlaces } from '~/graphql/query/places'
import { useGraphQL } from '~/utils/useGraphQL'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { GlobalStyle } from '~/styles'
import { NearbyPlaceBlock } from '~/components/NearbyPlaceBlock'
import { PlaceExploreModal } from '~/components/PlaceExploreModal'

export default function App() {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const router = useRouter()

  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null)
  const [isModalVisible, setModalVisible] = useState(false)

  const { data } = useGraphQL(true, allPlaces)

  return (
    <View style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          title: t('page.explore')!,
          headerTitle: () => {
            return (
              <View>
                <Image
                  style={{ width: 105, height: 24 }}
                  source={require('~/assets/wordmark-dark.png')}
                />
              </View>
            )
          },
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
        <MapView
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
                image={PinIcon[place.category] || undefined}
                onPress={() => {
                  setSelectedPlaceId(place.id as string)
                  setModalVisible(true)
                }}
              />
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
                image={PinIcon[type] || undefined}
              />
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
          <NearbyPlaceBlock
            name="Siam Paragon"
            category="building"
            onPress={() => {
              console.log('Pressed NearbyPlaceBlock')
            }}
          />
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
