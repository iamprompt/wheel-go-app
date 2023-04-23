import type { LocationObject, LocationTaskOptions } from 'expo-location'
import {
  LocationAccuracy,
  requestBackgroundPermissionsAsync,
  startLocationUpdatesAsync,
  stopLocationUpdatesAsync,
} from 'expo-location'
import { Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import type {
  TaskManagerTaskBody,
  TaskManagerTaskExecutor,
} from 'expo-task-manager'
import { defineTask } from 'expo-task-manager'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import type { UserLocationChangeEvent } from 'react-native-maps'
import type MapView from 'react-native-maps'
import { Polyline } from 'react-native-maps'
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button, { ButtonVariant } from '~/components/Button'
import { HeaderBackButton } from '~/components/HeaderBackButton'
import { HeaderLogo } from '~/components/HeaderLogo'
import { HorizontalDivider } from '~/components/HorizontalDivider'
import { Modal } from '~/components/Modal'
import { TracingSaveModal } from '~/components/TracingSaveModal'
import { TracingStatusIndicator } from '~/components/TracingStatusIndicator'
import { TracingStopModal } from '~/components/TracingStopModal'
import { WGMapView } from '~/components/WGMapView'
import { TRACING_STATES } from '~/const/trace'
import { useCreateRoutesMutation } from '~/generated-types'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface Record {
  latitude: number
  longitude: number
  timestamp: number
}

const LOCATION_WATCH_TASK_NAME = 'LOCATION_WATCH_TRACE'
const LOCATION_WATCH_CONFIG: LocationTaskOptions = {
  accuracy: LocationAccuracy.Highest,
  foregroundService: {
    killServiceOnDestroy: true,
    notificationTitle: 'Wheel Go',
    notificationBody: 'Tracing your route',
  },
  deferredUpdatesInterval: 1000,
  deferredUpdatesDistance: 1,
}

function Page() {
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const { t } = useTranslation()
  const [record, setRecord] = useState<Record[]>([])
  const coordinates = useMemo(
    () =>
      record.map((rec) => ({
        latitude: rec.latitude,
        longitude: rec.longitude,
      })),
    [record]
  )

  const mapRef = useRef<MapView>(null)
  const [state, setState] = useState<TRACING_STATES>(TRACING_STATES.READY)
  const [isStopModalVisible, setIsStopModalVisible] = useState(false)
  const [isSaveModalVisible, setIsSaveModalVisible] = useState(false)

  const [createRoute, { data }] = useCreateRoutesMutation()

  const handleLocationChange = (e: UserLocationChangeEvent) => {
    // if (state !== TRACING_STATES.RECORDING) {
    //   return
    // }

    const { coordinate } = e.nativeEvent

    if (!coordinate) {
      return
    }

    const { latitude, longitude } = coordinate

    // setRecord((prev) => [...prev, { latitude, longitude, timestamp }])

    // console.log('Location Changed', { latitude, longitude, timestamp })

    if (mapRef.current) {
      mapRef.current.animateCamera({
        center: {
          latitude,
          longitude,
        },
      })
    }
  }

  const handleLocationWatch: TaskManagerTaskExecutor = (body) => {
    if (state !== TRACING_STATES.RECORDING) {
      return
    }

    const {
      data: { locations },
      error,
    } = body as TaskManagerTaskBody<{ locations: LocationObject[] }>

    console.log('Location Watched', locations)

    const {
      timestamp,
      coords: { latitude, longitude },
    } = locations[0]

    setRecord((prev) => [...prev, { latitude, longitude, timestamp }])
  }

  useEffect(() => {
    defineTask(LOCATION_WATCH_TASK_NAME, handleLocationWatch)
  }, [])

  const handleStart = async () => {
    const { status } = await requestBackgroundPermissionsAsync()

    if (status !== 'granted') {
      console.log('Permission to access location was denied')
      return
    }

    console.log('Start Recording')

    setState(TRACING_STATES.RECORDING)

    startLocationUpdatesAsync(LOCATION_WATCH_TASK_NAME, LOCATION_WATCH_CONFIG)
  }

  const handlePause = () => {
    setState(TRACING_STATES.PAUSED)
    stopLocationUpdatesAsync(LOCATION_WATCH_TASK_NAME)
  }

  const handleResume = async () => {
    setState(TRACING_STATES.RECORDING)
    startLocationUpdatesAsync(LOCATION_WATCH_TASK_NAME, LOCATION_WATCH_CONFIG)
  }

  const handleStop = () => {
    setIsStopModalVisible(true)
  }

  const handleStopAction = () => {
    setState(TRACING_STATES.FINISHED)
    stopLocationUpdatesAsync(LOCATION_WATCH_TASK_NAME)
  }

  const handleSave = () => {
    setIsSaveModalVisible(true)
  }

  const handleSaveAction = async () => {
    const result = await createRoute({
      variables: {
        input: {
          paths: record.map((rec) => ({
            lat: rec.latitude,
            lng: rec.longitude,
          })),
        },
      },
    })

    console.log(JSON.stringify(result, null, 2))

    setState(TRACING_STATES.SAVED)
  }

  const handleDone = () => {
    router.replace('/')
  }

  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Tracing',
          headerShown: true,
          headerBackVisible: false,
          headerTitle: HeaderLogo,
          headerLeft:
            state === TRACING_STATES.READY ? HeaderBackButton : () => null,
        }}
      />

      <StatusBar style="auto" />

      <WGMapView
        ref={mapRef}
        onUserLocationChange={handleLocationChange}
        mapElements={
          <>
            <Polyline coordinates={coordinates} />
          </>
        }
      >
        {/* Status Indicator */}
        <TracingStatusIndicator
          status={state}
          style={{
            margin: 16,
            marginBottom: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        />

        {/* Background Overlay */}
        {[
          TRACING_STATES.PAUSED,
          TRACING_STATES.FINISHED,
          TRACING_STATES.SAVED,
        ].includes(state) ? (
          <Animated.View
            entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(500)}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.magenta[600],
                opacity: 0.6,
              }}
            />
          </Animated.View>
        ) : null}

        <Modal
          isVisible={isStopModalVisible}
          onClose={() => setIsStopModalVisible(false)}
          onAction={handleStopAction}
          modal={TracingStopModal}
        />

        <Modal
          isVisible={isSaveModalVisible}
          onClose={() => setIsSaveModalVisible(false)}
          onAction={handleSaveAction}
          modal={TracingSaveModal}
        />

        {state === TRACING_STATES.PAUSED ? (
          <Animated.View
            entering={SlideInDown.duration(500)}
            exiting={SlideOutDown.duration(500)}
          >
            <View
              style={{
                zIndex: 1,
                position: 'absolute',
                bottom: insets.bottom + 97,
                left: 0,
                right: 0,
                paddingHorizontal: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: COLORS.white,
                  padding: 16,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  alignItems: 'center',
                }}
              >
                <MaterialIcons
                  name="accessible"
                  size={80}
                  color={COLORS.magenta[500]}
                  style={{
                    marginBottom: 12,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_BOLD,
                      fontSize: 32,
                      textAlign: 'center',
                      color: COLORS.magenta[500],
                      marginBottom: 8,
                    }}
                  >
                    {t('trace.pause_popup.title')}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_REGULAR,
                      fontSize: 16,
                      textAlign: 'center',
                      color: COLORS['french-vanilla'][500],
                    }}
                  >
                    {t('trace.pause_popup.description')}
                  </Text>
                </View>
              </View>
            </View>
          </Animated.View>
        ) : null}

        {state === TRACING_STATES.FINISHED ? (
          <Animated.View
            entering={SlideInDown.duration(500)}
            exiting={SlideOutDown.duration(500)}
          >
            <View
              style={{
                zIndex: 1,
                position: 'absolute',
                bottom: insets.bottom + 97,
                left: 0,
                right: 0,
                paddingHorizontal: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: COLORS.white,
                  padding: 16,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  alignItems: 'center',
                }}
              >
                <MaterialIcons
                  name="celebration"
                  size={80}
                  color={COLORS.magenta[500]}
                  style={{
                    marginBottom: 12,
                  }}
                />
                <View
                  style={{
                    marginBottom: 16,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_BOLD,
                      fontSize: 32,
                      textAlign: 'center',
                      color: COLORS.magenta[500],
                      marginBottom: 8,
                    }}
                  >
                    {t('trace.finish_popup.title')}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONTS.LSTH_REGULAR,
                      fontSize: 16,
                      textAlign: 'center',
                      color: COLORS['french-vanilla'][500],
                    }}
                  >
                    {t('trace.finish_popup.description')}
                  </Text>
                </View>
                <HorizontalDivider />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 16,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-start',
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTS.LSTH_BOLD,
                        fontSize: 14,
                        color: COLORS['french-vanilla'][500],
                      }}
                    >
                      {t('trace.finish_popup.overall_time')}
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTS.LSTH_BOLD,
                        fontSize: 20,
                      }}
                    >
                      5:00 {t('units.minutes')}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: FONTS.LSTH_BOLD,
                        fontSize: 14,
                        color: COLORS['french-vanilla'][500],
                      }}
                    >
                      {t('trace.finish_popup.overall_distance')}
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTS.LSTH_BOLD,
                        fontSize: 20,
                      }}
                    >
                      20 {t('units.meters')}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Animated.View>
        ) : null}

        {/* Action Button Group */}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingBottom: insets.bottom,
            backgroundColor: COLORS.white,
          }}
        >
          <View
            style={{
              borderTopColor: COLORS['french-vanilla'][300],
              borderTopWidth: 1,
              paddingHorizontal: 16,
              paddingVertical: 24,
              flexDirection: 'row',
              gap: 16,
            }}
          >
            {state === TRACING_STATES.READY ? (
              <Button onPress={handleStart} label="trace.start" fullWidth />
            ) : null}
            {state === TRACING_STATES.RECORDING ? (
              <>
                <Button onPress={handlePause} label="trace.pause" fullWidth />
                <Button
                  onPress={handleStop}
                  label="trace.stop"
                  variant={ButtonVariant.Secondary}
                  fullWidth
                />
              </>
            ) : null}
            {state === TRACING_STATES.PAUSED ? (
              <>
                <Button onPress={handleResume} label="trace.resume" fullWidth />
                <Button
                  onPress={handleStop}
                  label="trace.stop"
                  variant={ButtonVariant.Secondary}
                  fullWidth
                />
              </>
            ) : null}
            {state === TRACING_STATES.FINISHED ? (
              <Button onPress={handleSave} label="trace.save" fullWidth />
            ) : null}
            {state === TRACING_STATES.SAVED ? (
              <Button onPress={handleDone} label="button.done" fullWidth />
            ) : null}
          </View>
        </View>
      </WGMapView>
    </View>
  )
}

export default Page
