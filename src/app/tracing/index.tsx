import { Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text, View } from 'react-native'
import type { UserLocationChangeEvent } from 'react-native-maps'
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps'
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
import { MapStyle } from '~/const/map'
import { TRACING_STATES } from '~/const/trace'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

interface Record {
  latitude: number
  longitude: number
  timestamp: number
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

  const [state, setState] = useState<TRACING_STATES>(TRACING_STATES.READY)
  const [isStopModalVisible, setIsStopModalVisible] = useState(false)
  const [isSaveModalVisible, setIsSaveModalVisible] = useState(false)

  const handleLocationChange = (e: UserLocationChangeEvent) => {
    if (state !== TRACING_STATES.RECORDING) {
      return
    }

    const { coordinate } = e.nativeEvent

    if (!coordinate) {
      return
    }

    const { latitude, longitude, timestamp } = coordinate

    setRecord((prev) => [...prev, { latitude, longitude, timestamp }])
  }

  const handleStart = () => {
    console.log('Start Recording')

    setState(TRACING_STATES.RECORDING)
  }

  const handlePause = () => {
    setState(TRACING_STATES.PAUSED)
  }

  const handleResume = () => {
    setState(TRACING_STATES.RECORDING)
  }

  const handleStop = () => {
    setIsStopModalVisible(true)
  }

  const handleStopAction = () => {
    setState(TRACING_STATES.FINISHED)
  }

  const handleSave = () => {
    setIsSaveModalVisible(true)
  }

  const handleSaveAction = () => {
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
          headerTitle: HeaderLogo,
          headerLeft:
            state === TRACING_STATES.READY ? HeaderBackButton : () => null,
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
          onUserLocationChange={handleLocationChange}
        >
          <Polyline coordinates={coordinates} />
        </MapView>

        {/* Map Overlay */}

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

        {/* Map Action Button Group */}
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: 41.7 + 16,
            margin: 16,
            backgroundColor: COLORS.white,
            borderRadius: 12,
            zIndex: 1,
          }}
        >
          <Pressable
            style={{
              padding: 12,
            }}
            onPress={() => {
              console.log('Press to show route')
            }}
          >
            <MaterialIcons name="route" size={24} />
          </Pressable>
          <HorizontalDivider />
          <Pressable
            style={{
              padding: 12,
            }}
            onPress={() => {
              console.log('Pressed to my location')
            }}
          >
            <MaterialIcons name="near_me" size={24} />
          </Pressable>
        </View>

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
      </View>
    </View>
  )
}

export default Page
