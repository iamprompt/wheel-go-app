import dayjs from 'dayjs'
import { Stack, useSearchParams } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { VerticalDivider } from '~/components/VerticalDivider'
import { MapStyle } from '~/const/map'
import COLORS from '~/styles/colors'
import FONTS from '~/styles/fonts'
import { MaterialIcons } from '~/utils/icons/MaterialIcons'

function Page() {
  const insets = useSafeAreaInsets()
  const { t } = useTranslation()

  const { id } = useSearchParams<{ id: string }>()

  if (!id) {
    return null
  }

  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          title: '',
          headerTransparent: true,
        }}
      />

      <View
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <MapView
          style={{
            flex: 1,
          }}
          provider={PROVIDER_GOOGLE}
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
        ></MapView>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 16,
            paddingTop: 28,
            paddingBottom: insets.bottom + 16,
            backgroundColor: COLORS.white,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
            <MaterialIcons name="route" size={24} color={COLORS.success[400]} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONTS.LSTH_BOLD,
              }}
            >
              {t('records.contributed_routes')}
            </Text>
          </View>

          <View
            style={{
              gap: 16,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_BOLD,
                    fontSize: 14,
                    color: COLORS['french-vanilla'][500],
                    width: 60,
                  }}
                >
                  {t('records.date')}
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_REGULAR,
                    fontSize: 14,
                  }}
                >
                  {dayjs('2021-01-01').format('DD MMMM YYYY')}
                </Text>
              </View>
              <VerticalDivider />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_BOLD,
                    fontSize: 14,
                    color: COLORS['french-vanilla'][500],
                    width: 60,
                  }}
                >
                  {t('records.time')}
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_REGULAR,
                    fontSize: 14,
                  }}
                >
                  {dayjs('2021-01-01').format('HH:mm')}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_BOLD,
                    fontSize: 14,
                    color: COLORS['french-vanilla'][500],
                    width: 60,
                  }}
                >
                  {t('records.elapsed_time')}
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_REGULAR,
                    fontSize: 14,
                  }}
                >
                  {dayjs.duration(186, 'seconds').format('HH:mm:ss')}
                </Text>
              </View>
              <VerticalDivider />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_BOLD,
                    fontSize: 14,
                    color: COLORS['french-vanilla'][500],
                    width: 60,
                  }}
                >
                  {t('records.distance')}
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.LSTH_REGULAR,
                    fontSize: 14,
                  }}
                >
                  20 {t('units.meters')}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Page
