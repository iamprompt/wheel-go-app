import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Pressable, View } from 'react-native'
import { useRouter } from 'expo-router'
import { TraceCTAButton } from './TraceCTAButton'
import { Modal } from './Modal'
import { MapPrefsModal } from './MapPrefsModal'
import { WGMapMarker } from './WGMapMarker'
import { MapCameraConfig, MapStyle } from '~/const/map'
import {
  Place_Types,
  useGetPlacesQuery,
  useGetPreDefinedRoutesQuery,
} from '~/generated-types'
import { GlobalStyle } from '~/styles'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { getCurrentPosition } from '~/utils/location'
import COLORS from '~/styles/colors'

export const WGMapView = forwardRef<
  MapView,
  {
    selectedPlaceId: string | null
    onSelectPlace: (placeId: string) => void
    children?: React.ReactNode
  }
>(({ selectedPlaceId, onSelectPlace, children }, ref) => {
  const router = useRouter()
  const mapRef = useRef<MapView>(null)
  const [isPrefsModalVisible, setPrefsModalVisible] = useState(false)

  const { data: placesData } = useGetPlacesQuery()
  const { data: routesData } = useGetPreDefinedRoutesQuery()

  useImperativeHandle(ref, () => mapRef.current!)

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

  return (
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

          const isPlaceSelected = selectedPlaceId === place.id

          return (
            <WGMapMarker
              key={place.id}
              coordinate={place.location}
              onPress={() => {
                if (isPlaceSelected || place.type === Place_Types.Curbcut) {
                  return
                }
                onSelectPlace(place.id)
              }}
              type={place.type || Place_Types.Building}
              isSelected={isPlaceSelected}
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
            setPrefsModalVisible(true)
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
      {children}
      <Modal
        isVisible={isPrefsModalVisible}
        modal={MapPrefsModal}
        onClose={() => {
          setPrefsModalVisible(false)
        }}
      />
    </View>
  )
})
