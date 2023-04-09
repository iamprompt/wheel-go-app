import { Stack, useSearchParams } from 'expo-router'
import { useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps'
import { MapCameraConfig } from '~/const/map'
import { GetPreDefinedRouteById } from '~/graphql/query/routes'
import { useGraphQL } from '~/utils/useGraphQL'

function Page() {
  const { t } = useTranslation()
  const mapRef = useRef<MapView>(null)
  const { id } = useSearchParams<{
    id: string
  }>()

  console.log(id)

  const { data } = useGraphQL(!!id, GetPreDefinedRouteById, {
    id: id!,
  })

  const routes = useMemo(() => {
    return data?.Route?.route || []
  }, [data])

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
          onLayout={() => {
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
          }}
          style={{
            flex: 1,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          {...MapCameraConfig}
        >
          <Polyline coordinates={routes} strokeWidth={2.5} />
        </MapView>
      </View>
    </View>
  )
}

export default Page
