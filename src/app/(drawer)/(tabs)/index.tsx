import { Stack, useNavigation, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Pressable, Text, View } from 'react-native'
import type MapView from 'react-native-maps'
import { DrawerActions } from '@react-navigation/routers'
import { useTranslation } from 'react-i18next'

// import ClusterMapView from 'react-native-map-clustering'
import { useEffect, useRef, useState } from 'react'

import { MaterialIcons } from '~/utils/icons/MaterialIcons'
import { GlobalStyle } from '~/styles'
import { NearbyPlaceBlock } from '~/components/NearbyPlaceBlock'
import { HeaderLogo } from '~/components/HeaderLogo'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import {
  Place_Types,
  useGetNearbyPlacesLazyQuery,
  useGetPlaceByIdLazyQuery,
} from '~/generated-types'
import { TraceCTAButton } from '~/components/TraceCTAButton'
import { getCurrentPosition } from '~/utils/location'
import { WGMapView } from '~/components/WGMapView'
import { Modal } from '~/components/Modal'
import { TransportExploreModal } from '~/components/TransportExploreModal'
import { PlaceExploreModal } from '~/components/PlaceExploreModal'
import { CurbcutExploreModal } from '~/components/CurbcutExploreModal'

export default function App() {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const router = useRouter()

  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null)
  const [selectedPlaceType, setSelectedPlaceType] = useState<Place_Types>()
  const [isModalVisible, setModalVisible] = useState(false)

  const [getSelectedPlace, { data: place }] = useGetPlaceByIdLazyQuery()

  const [getNearbyPlaces] = useGetNearbyPlacesLazyQuery()

  const mapRef = useRef<MapView>(null)

  const handleSelectPlace = async (placeId: string) => {
    try {
      const { data } = await getSelectedPlace({
        variables: {
          id: placeId,
        },
      })

      if (data && data.getPlaceById) {
        setSelectedPlaceId(data.getPlaceById.id)
        setSelectedPlaceType(data.getPlaceById.type!)

        if (data.getPlaceById.type === Place_Types.Curbcut) {
          setModalVisible(true)
        }

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
      <WGMapView
        ref={mapRef}
        selectedPlaceId={selectedPlaceId}
        onSelectPlace={handleSelectPlace}
      >
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

          {selectedPlaceId !== null &&
          selectedPlaceType !== Place_Types.Curbcut ? (
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
      </WGMapView>

      {selectedPlaceId ? (
        <Modal
          modal={
            selectedPlaceType === Place_Types.Transport
              ? TransportExploreModal
              : selectedPlaceType === Place_Types.Curbcut
              ? CurbcutExploreModal
              : PlaceExploreModal
          }
          placeId={selectedPlaceId!}
          isVisible={isModalVisible}
          onClose={() => {
            setModalVisible(false)
          }}
        />
      ) : null}
    </View>
  )
}
