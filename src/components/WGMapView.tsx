import type { ComponentProps } from 'react'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { View } from 'react-native'
import { Modal } from './Modal'
import { MapPrefsModal } from './MapPrefsModal'
import { WGMapMarker } from './WGMapMarker'
import { WGMapControlButton } from './WGMapControlButton'
import { MapCameraConfig, MapStyle } from '~/const/map'
import {
  Place_Types,
  useGetPlacesQuery,
  useGetPreDefinedRoutesQuery,
} from '~/generated-types'
import { getCurrentPosition } from '~/utils/location'
import COLORS from '~/styles/colors'

export const WGMapView = forwardRef<
  MapView,
  {
    selectedPlaceId?: string | null
    onSelectPlace?: (placeId: string) => void
    mapElements?: React.ReactNode
    children?: React.ReactNode
  } & ComponentProps<typeof MapView>
>(
  (
    { selectedPlaceId, onSelectPlace, children, mapElements, ...mapViewProps },
    ref
  ) => {
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
          {...mapViewProps}
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
                  if (isPlaceSelected) {
                    return
                  }
                  onSelectPlace?.(place.id)
                }}
                type={place.type || Place_Types.Building}
                isSelected={isPlaceSelected}
              />
            )
          })}
          {mapElements}
        </MapView>

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
          <WGMapControlButton
            icon="tune"
            iconColor={COLORS.magenta[500]}
            onPress={() => setPrefsModalVisible(true)}
          />
          <WGMapControlButton
            icon="near_me"
            iconColor={COLORS.info[400]}
            onPress={() => handleCurrentLocation()}
          />
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
  }
)
