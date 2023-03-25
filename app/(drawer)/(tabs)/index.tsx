import { Stack, useNavigation } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/routers'
import { MapStyle, PinIcon } from '../../../const/map'
import { allPlaces } from '../../../graphql/query/places'
import { useGraphQL } from '../../../utils/useGraphql'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
})

export default function App() {
  const { data } = useGraphQL(allPlaces)

  const navigation = useNavigation()

  // console.log(JSON.stringify(data, null, 2))

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Home',
          headerTitle: () => {
            return (
              <View>
                <Image
                  style={{ width: 105, height: 24 }}
                  source={require('../../../assets/wordmark-dark.png')}
                />
              </View>
            )
          },
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 16 }}>
                <Ionicons
                  name="menu"
                  size={24}
                  onPress={() =>
                    navigation.dispatch(DrawerActions.openDrawer())
                  }
                />
              </View>
            )
          },
        }}
      />

      <Drawer>
        <Drawer.Screen
          name="settings"
          options={{
            title: 'Settings',
          }}
        />
      </Drawer>

      <StatusBar style="auto" />
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
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
