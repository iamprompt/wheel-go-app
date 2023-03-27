import { Stack, useNavigation } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { DrawerActions } from '@react-navigation/routers'
import { MapStyle, PinIcon } from '~/const/map'
import { allPlaces } from '~/graphql/query/places'
import { useGraphQL } from '~/utils/useGraphQL'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { GlobalStyle } from '~/styles'

export default function App() {
  const navigation = useNavigation()

  const { data } = useGraphQL(allPlaces)

  return (
    <View style={[GlobalStyle.container]}>
      <Stack.Screen
        options={{
          title: 'Home',
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
                : facility.type

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
      </View>
    </View>
  )
}
