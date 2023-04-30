import { Stack, useSearchParams } from 'expo-router'
import { useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { WGPolyline } from '~/components/WGPolyline'
import { MapCameraConfig } from '~/const/map'
import { useGetRouteByIdQuery } from '~/generated-types'

function Page() {
  const { t } = useTranslation()
  const mapRef = useRef<MapView>(null)
  const { id } = useSearchParams<{
    id: string
  }>()
  const { data } = useGetRouteByIdQuery({
    variables: {
      id: id!,
    },
  })

  const routes = useMemo(() => {
    return (
      data?.getRouteById?.paths?.map(({ lat, lng }) => ({
        latitude: lat,
        longitude: lng,
      })) || []
    )
  }, [data])

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates(routes, {
        edgePadding: {
          top: 150,
          right: 100,
          bottom: 100,
          left: 100,
        },
      })
    }
  }, [routes])

  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: t('routes.route_title', { id: id! })!,
        }}
      />

      <View
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <MapView
          ref={mapRef}
          style={{
            flex: 1,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          {...MapCameraConfig}
        >
          <WGPolyline coordinates={routes} />
        </MapView>
      </View>
    </View>
  )
}

export default Page
